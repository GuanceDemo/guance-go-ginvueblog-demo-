package utils

import (
	"context"
	"gin-blog/config"
	"log"
	"time"

	"github.com/gin-gonic/gin"
	"github.com/redis/go-redis/v9"
	"go.uber.org/zap"
)

const REDIS_UTIL_ERR_PREFIX = "utils/redis.go ->"

var (
	ctx = context.Background()
	rdb *redis.Client
)

// 对 Redis 库的操作二次封装, 统一处理错误
var Redis = new(_redis)

type _redis struct{}

// 初始化 redis 连接
func InitRedis() *redis.Client {
	// traceVar := &TraceVar{
	// 	CollectorEndpoint: os.Getenv("OTEL_EXPORTER_OTLP_ENDPOINT"),
	// 	CollectorURLPath:  os.Getenv("OTEL_EXPORTER_OTLP_URL_PATH"),
	// 	ServiceNameKey:    os.Getenv("OTEL_REDIS_SERVICE_NAME"),
	// 	ServiceVersion:    os.Getenv("SERVICE_VERSION"),
	// }

	// InitTracer(traceVar)

	redisCfg := config.Cfg.Redis
	rdb = redis.NewClient(&redis.Options{
		Addr:     redisCfg.Addr,
		Password: redisCfg.Password,
		DB:       redisCfg.DB,
	})
	// 测试连接状况
	_, err := rdb.Ping(ctx).Result()
	if err != nil {
		log.Panic("Reids 连接失败: ", err)
	}
	log.Println("Redis 连接成功 ")

	// if err := redisotel.InstrumentTracing(rdb); err != nil {
	// 	panic(err)

	// }

	// 加入otel可观测改造

	// // Enable tracing instrumentation.
	// if err := redisotel.InstrumentTracing(rdb); err != nil {
	// 	panic(err)
	// }

	// // Enable metrics instrumentation.
	// if err := redisotel.InstrumentMetrics(rdb); err != nil {
	// 	panic(err)
	// }

	return rdb
}

// 通用执行指令方法
// func (*redisUtil) Execute(cmd string, args ...any) (any, error) {
// 	return rdb.Do(c.Request.Context(), args...).Result()
// }

// redis 获取根据匹配项获取键名列表
func (*_redis) Keys(pattern string, c *gin.Context) []string {
	return rdb.Keys(c.Request.Context(), pattern).Val()
}

// redis 删除值
func (*_redis) Del(key string, c *gin.Context) {
	err := rdb.Del(c.Request.Context(), key).Err()
	if err != nil {
		Logger.Error(REDIS_UTIL_ERR_PREFIX+"Del: ", zap.Error(err))
		panic(err)
	}
}

// redis 设置 key value 过期时间
func (*_redis) Set(key string, value interface{}, expiration time.Duration, c *gin.Context) {
	err := rdb.Set(c.Request.Context(), key, value, expiration).Err()
	if err != nil {
		Logger.Error(REDIS_UTIL_ERR_PREFIX+"Set: ", zap.Error(err))
		panic(err)
	}
}

// 将 key 中存储的数字 + 1
// 如果 key 不存在, 默认初始化为 0, 再执行 INCR 操作
// 如果 值 包含错误的类型, 或是字符串类型的值不能表示为数字, 返回错误
func (*_redis) Incr(key string, c *gin.Context) {
	err := rdb.Incr(c.Request.Context(), key).Err()
	if err != nil {
		Logger.Error(REDIS_UTIL_ERR_PREFIX+"Incr: ", zap.Error(err))
		panic(err)
	}
}

// redis 获取值
func (*_redis) GetVal(key string, c *gin.Context) string {
	return rdb.Get(c.Request.Context(), key).Val()
}

// redis 获取数字
func (*_redis) GetInt(key string, c *gin.Context) int {
	val, _ := rdb.Get(c.Request.Context(), key).Int()
	// if err != nil {
	// 	Logger.Error(REDIS_UTIL_ERR_PREFIX+"GetInt: ", zap.Error(err))
	// 	panic(err)
	// }
	return val
}

// 从 redis 中取值, 不存在会有 redis: nil 的错误
func (*_redis) GetResult(key string, c *gin.Context) (string, error) {
	return rdb.Get(c.Request.Context(), key).Result()
}

// 往 [集合(Set)] 中添加 元素
func (*_redis) SAdd(key string, c *gin.Context, members ...any) {
	err := rdb.SAdd(c.Request.Context(), key, members...).Err()
	if err != nil {
		Logger.Error(REDIS_UTIL_ERR_PREFIX+"SAdd: ", zap.Error(err))
		panic(err)
	}
}

// 判断 元素 是否是 [集合(Set)] 的成员
func (*_redis) SIsMember(key string, c *gin.Context, member any) bool {
	return rdb.SIsMember(c.Request.Context(), key, member).Val()
}

// 获取 [集合(Set)] 的成员列表
func (*_redis) SMembers(key string, c *gin.Context) []string {
	return rdb.SMembers(c.Request.Context(), key).Val()
}

// 移除 [集合(Set)] 中的元素
func (*_redis) SRem(key string, c *gin.Context, member any) {
	rdb.SRem(c.Request.Context(), key, member)
}

// 为[哈希表(Hash)]中的字段值加上指定增量值 (可以为负)
// 如果 key 不存在, 自动创建哈希表并执行操作
// 如果 field 不存在, 创建该字段值并初始化为 0
func (*_redis) HIncrBy(key, field string, c *gin.Context, incr int64) {
	err := rdb.HIncrBy(c.Request.Context(), key, field, incr).Err()
	if err != nil {
		Logger.Error(REDIS_UTIL_ERR_PREFIX+"HIncrBy: ", zap.Error(err))
		panic(err)
	}
}

// 获取[哈希表(Hash)]中 指定字段的值
func (*_redis) HGet(c *gin.Context, key, filed string) int {
	val, _ := rdb.HGet(c.Request.Context(), key, filed).Int()
	return val
}

// 获取[哈希表(Hash)]中 所有的字段和值
func (*_redis) HGetAll(key string, c *gin.Context) map[string]string {
	return rdb.HGetAll(c.Request.Context(), key).Val()
}

// func (*redisUtil) ZAdd(key string, me) {
// rdb.ZAdd()
// }

func (*_redis) ZRangeWithScores(key string, c *gin.Context, start, stop int64) []redis.Z {
	return rdb.ZRangeWithScores(c.Request.Context(), key, start, stop).Val()
}

// 获取[有序集合]中, 成员的分数值
func (*_redis) ZScore(key, member string, c *gin.Context) int {
	return int(rdb.ZScore(c.Request.Context(), key, member).Val())
}

// [有序集合]中 key 中指定字段的整数值加上增量 incr
func (*_redis) ZincrBy(key, member string, c *gin.Context, incr float64) {
	err := rdb.ZIncrBy(c.Request.Context(), key, incr, member).Err()
	if err != nil {
		Logger.Error(REDIS_UTIL_ERR_PREFIX+"ZincrBy: ", zap.Error(err))
		panic(err)
	}
}

// type Options struct {
// 网络类型 tcp 或者 unix. 默认是 tcp.
// Network string

// redis地址，格式 host:port
// Addr string

// 新建一个redis连接的时候，会回调这个函数
// OnConnect func(*Conn) error

// redis密码，redis server没有设置可以为空。
// Password string

// redis数据库，序号从0开始，默认是0，可以不用设置
// DB int

// redis操作失败最大重试次数，默认不重试。
// MaxRetries int

// 最小重试时间间隔.
// 默认是 8ms ; -1 表示关闭.
// MinRetryBackoff time.Duration

// 最大重试时间间隔
// 默认是 512ms; -1 表示关闭.
// MaxRetryBackoff time.Duration

// redis连接超时时间.
// 默认是 5 秒.
// DialTimeout time.Duration

// socket读取超时时间
// 默认 3 秒.
// ReadTimeout time.Duration

// socket写超时时间
// WriteTimeout time.Duration

// redis连接池的最大连接数.
// 默认连接池大小等于 cpu个数 * 10
// PoolSize int

// redis连接池最小空闲连接数.
// MinIdleConns int
// redis连接最大的存活时间，默认不会关闭过时的连接.
// MaxConnAge time.Duration

// 当你从redis连接池获取一个连接之后，连接池最多等待这个拿出去的连接多长时间。
// 默认是等待 ReadTimeout + 1 秒.
// PoolTimeout time.Duration

// redis连接池多久会关闭一个空闲连接.
// 默认是 5 分钟. -1 则表示关闭这个配置项
// IdleTimeout time.Duration

// 多长时间检测一下，空闲连接
// 默认是 1 分钟. -1 表示关闭空闲连接检测
// IdleCheckFrequency time.Duration

// 只读设置，如果设置为true， redis只能查询缓存不能更新。
// readOnly bool
// }
