package utils

import (
	"context"

	"github.com/open-telemetry/opentelemetry-collector-contrib/extension/pprofextension"
	"go.opentelemetry.io/otel"
	"go.opentelemetry.io/otel/exporters/otlp/otlptrace"
	"go.opentelemetry.io/otel/exporters/otlp/otlptrace/otlptracehttp"
	"go.opentelemetry.io/otel/propagation"
	"go.opentelemetry.io/otel/sdk/resource"
	sdktrace "go.opentelemetry.io/otel/sdk/trace"
	semconv "go.opentelemetry.io/otel/semconv/v1.17.0"
)

type TraceVar struct {
	CollectorEndpoint string
	CollectorURLPath  string
	ServiceNameKey    string
	ServiceVersion    string
}

func InitProfile() error {
	pprofextension.New
	ppro
	return
}

// 初始化 tracer 函数
func InitTracer(traceVar *TraceVar) func(context.Context) error {

	// SetTextMapPropagator 初始化上下文传播器
	otel.SetTextMapPropagator(propagation.NewCompositeTextMapPropagator(propagation.TraceContext{}, propagation.Baggage{}))
	ctx := context.Background()
	client := otlptracehttp.NewClient(
		otlptracehttp.WithEndpoint(traceVar.CollectorEndpoint),
		otlptracehttp.WithURLPath(traceVar.CollectorURLPath),
		otlptracehttp.WithInsecure(),
	)
	otlptracehttp.WithCompression(1)

	exporter := otlptrace.NewUnstarted(
		// ctx,
		client,
	)
	// if err != nil {
	//     log.Fatal("creating OTLP trace exporter: %w", err)
	// }

	res, _ := resource.New(ctx,
		resource.WithFromEnv(),
		resource.WithProcess(),
		resource.WithTelemetrySDK(),
		resource.WithHost(),
		resource.WithAttributes(

			semconv.ServiceNameKey.String(traceVar.ServiceNameKey),
			semconv.ServiceVersion(traceVar.ServiceVersion),
		),
	)

	bsp := sdktrace.NewBatchSpanProcessor(exporter)
	tracerProvider := sdktrace.NewTracerProvider(
		sdktrace.WithSampler(sdktrace.AlwaysSample()),
		sdktrace.WithResource(res),
		sdktrace.WithSpanProcessor(bsp),
	)

	otel.SetTracerProvider(tracerProvider)

	return tracerProvider.Shutdown
}
