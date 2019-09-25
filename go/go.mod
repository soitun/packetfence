module github.com/inverse-inc/packetfence/go

go 1.13

require (
	github.com/Sereal/Sereal v0.0.0-20161214074320-36f2c9f6f409
	github.com/Shopify/sarama v0.0.0-20180122132747-0f4f8caef994
	github.com/apache/thrift v0.0.0-20180124195629-23dde8c446bb
	github.com/beorn7/perks v0.0.0-20160804104726-4c0e84591b9a
	github.com/bifurcation/mint v0.0.0-20190901182352-1218c79bb0c0 // indirect
	github.com/captncraig/cors v0.0.0-20170507232344-153f484dcf3d
	github.com/cevaris/ordered_map v0.0.0-20171019141434-01ce2b16ad4f
	github.com/coreos/bbolt v1.3.3 // indirect
	github.com/coreos/etcd v3.3.15+incompatible
	github.com/coreos/go-semver v0.3.0 // indirect
	github.com/coreos/go-systemd v0.0.0-20180125085048-0019d07ebc2c
	github.com/coreos/pkg v0.0.0-20180928190104-399ea9e2e55f // indirect
	github.com/davecgh/go-spew v1.1.1
	github.com/dgrijalva/jwt-go v3.2.0+incompatible // indirect
	github.com/dgryski/go-csnappy v0.0.0-20150721071530-9d18391da197
	github.com/diegoguarnieri/go-conntrack v0.0.0-20161208180411-9abb0707ff31
	github.com/dnstap/golang-dnstap v0.0.0-20170829151710-2cf77a2b5e11
	github.com/dsnet/compress v0.0.0-20171208185109-cc9eb1d7ad76
	github.com/dustin/go-humanize v0.0.0-20171111073723-bb3d318650d4
	github.com/eapache/go-resiliency v0.0.0-20180101203313-ef9aaa7ea8bd
	github.com/eapache/go-xerial-snappy v0.0.0-20160609142408-bb955e01b934
	github.com/eapache/queue v0.0.0-20160805004713-44cc805cf132
	github.com/farsightsec/golang-framestream v0.0.0-20180124174429-c06a5734334d
	github.com/fdurand/arp v0.0.0-20180807174648-27b38d3af1be
	github.com/fdurand/go-cache v0.0.0-20180104143916-cf0198ac7d92
	github.com/flynn/go-shlex v0.0.0-20150515145356-3f9db97f8568
	github.com/gdey/jsonpath v0.0.0-20151203210429-124c978a1ffc
	github.com/glycerine/go-unsnap-stream v0.0.0-20171127062821-62a9a9eb44fd
	github.com/go-errors/errors v0.0.0-20180813162953-d98b870cc4e0
	github.com/go-logfmt/logfmt v0.0.0-20161115142513-390ab7935ee2
	github.com/go-redis/redis v0.0.0-20190325112110-a679e614427a
	github.com/go-sql-driver/mysql v0.0.0-20190330032241-c0f6b444ad8f
	github.com/go-stack/stack v0.0.0-20171112031402-259ab82a6cad
	github.com/gogo/protobuf v1.2.1
	github.com/goji/httpauth v0.0.0-20160601135302-2da839ab0f4d
	github.com/golang/groupcache v0.0.0-20190702054246-869f871628b6 // indirect
	github.com/golang/protobuf v1.3.2
	github.com/golang/snappy v0.0.0-20170215233205-553a64147049
	github.com/google/btree v1.0.0 // indirect
	github.com/google/go-cmp v0.0.0-20180328201512-5411ab924f9f
	github.com/google/uuid v0.0.0-20171129191014-dec09d789f3d
	github.com/gorilla/mux v0.0.0-20180120075819-c0091a029979
	github.com/gorilla/rpc v0.0.0-20160927134711-22c016f3df3f
	github.com/gorilla/websocket v0.0.0-20180125185121-91f589db023d
	github.com/grpc-ecosystem/go-grpc-middleware v1.1.0 // indirect
	github.com/grpc-ecosystem/go-grpc-prometheus v1.2.0 // indirect
	github.com/grpc-ecosystem/grpc-gateway v1.11.2 // indirect
	github.com/grpc-ecosystem/grpc-opentracing v0.0.0-20171214222146-0e7658f8ee99
	github.com/hashicorp/go-syslog v0.0.0-20170829120034-326bf4a7f709
	github.com/hashicorp/golang-lru v0.0.0-20160813221303-0a025b7e63ad
	github.com/hpcloud/tail v1.0.0
	github.com/inconshreveable/log15 v0.0.0-20171019012758-0decfc6c20d9
	github.com/inverse-inc/go-ipset v0.0.0-20190925174109-4d5749cc4aa6
	github.com/jimstudt/http-authentication v0.0.0-20140401203705-3eca13d6893a
	github.com/jonboulle/clockwork v0.1.0 // indirect
	github.com/json-iterator/go v1.1.7 // indirect
	github.com/julienschmidt/httprouter v0.0.0-20171027133709-e1b9828bc9e5
	github.com/kr/pretty v0.1.0
	github.com/kr/text v0.1.0
	github.com/krolaw/dhcp4 v0.0.0-20171222085133-4abfceffa76a
	github.com/lucas-clemente/aes12 v0.0.0-20171027163421-cd47fb39b79f
	github.com/lucas-clemente/fnv128a v0.0.0-20160504152609-393af48d3916
	github.com/lucas-clemente/quic-go v0.11.0
	github.com/lucas-clemente/quic-go-certificates v0.0.0-20160823095156-d2f86524cced
	github.com/mattn/go-colorable v0.0.0-20180115155639-6cc8b475d468
	github.com/mattn/go-isatty v0.0.0-20171107050531-6ca4dbf54d38
	github.com/matttproud/golang_protobuf_extensions v0.0.0-20160424113007-c12348ce28de
	github.com/mdlayher/ethernet v0.0.0-20170707213343-e72cf8343052
	github.com/mdlayher/raw v0.0.0-20171214195253-9df8b4265df2
	github.com/mediocregopher/radix.v2 v0.0.0-20180603022615-94360be26253
	github.com/mholt/archiver v0.0.0-20171012052341-26cf5bb32d07
	github.com/miekg/dns v0.0.0-20180125103803-5364553f1ee9
	github.com/modern-go/reflect2 v1.0.1 // indirect
	github.com/naoina/go-stringutil v0.0.0-20151118234443-6b638e95a32d
	github.com/naoina/toml v0.0.0-20170918210437-9fafd6967416
	github.com/nu7hatch/gouuid v0.0.0-20131221200532-179d4d0c4d8d
	github.com/nwaples/rardecode v0.0.0-20171029023500-e06696f847ae
	github.com/opentracing-contrib/go-observer v0.0.0-20170622124052-a52f23424492
	github.com/opentracing/opentracing-go v1.1.0
	github.com/openzipkin/zipkin-go-opentracing v0.0.0-20180123190626-6bb822a7f15f
	github.com/patrickmn/go-cache v0.0.0-20170722040110-a3647f8e31d7
	github.com/philhofer/fwd v0.0.0-20170905212122-bb6d471dc95d
	github.com/pierrec/lz4 v0.0.0-20180113151703-ed8d4cc3b461
	github.com/pierrec/xxHash v0.0.0-20170714082455-a0006b13c722
	github.com/prometheus/client_golang v0.0.0-20180120141031-06bc6e01f4ba
	github.com/prometheus/client_model v0.0.0-20171117100541-99fa1f4be8e5
	github.com/prometheus/common v0.0.0-20180110214958-89604d197083
	github.com/prometheus/procfs v0.0.0-20180125133057-cb4147076ac7
	github.com/rcrowley/go-metrics v0.0.0-20171128170426-e181e095bae9
	github.com/russross/blackfriday v1.5.2
	github.com/satori/go.uuid v0.0.0-20170321230731-5bf94b69c6b6
	github.com/shurcooL/sanitized_anchor_name v0.0.0-20160918041101-1dba4b3954bc
	github.com/simon/go-netadv v0.0.0-20170602081515-fe67988531c7
	github.com/soheilhy/cmux v0.1.4 // indirect
	github.com/spf13/cobra v0.0.5 // indirect
	github.com/spf13/pflag v1.0.5 // indirect
	github.com/tinylib/msgp v0.0.0-20180109165501-428e467e72ad
	github.com/tmc/grpc-websocket-proxy v0.0.0-20190109142713-0ad062ec5ee5 // indirect
	github.com/ugorji/go v1.1.7 // indirect
	github.com/ulikunitz/xz v0.0.0-20170605215311-0c6b41e72360
	github.com/xenolf/lego v0.0.0-20180125161008-6bddbfd17a6e
	github.com/xiang90/probing v0.0.0-20190116061207-43a291ad63a2 // indirect
	golang.org/x/crypto v0.0.0-20190308221718-c2843e01d9a2
	golang.org/x/net v0.0.0-20190311183353-d8887717615a
	golang.org/x/sys v0.0.0-20190422165155-953cdadca894
	golang.org/x/text v0.3.0
	golang.org/x/time v0.0.0-20190921001708-c4c64cad1fd0 // indirect
	google.golang.org/genproto v0.0.0-20190819201941-24fa4b261c55
	google.golang.org/grpc v1.19.0
	gopkg.in/alexcesaro/statsd.v2 v2.0.0-20160320182110-7fea3f0d2fab
	gopkg.in/asn1-ber.v1 v1.0.0-20170511165959-379148ca0225
	gopkg.in/ldap.v2 v2.0.0-20171123045618-bb7a9ca6e4fb
	gopkg.in/natefinch/lumberjack.v2 v2.0.0-20170531160350-a96e63847dc3
	gopkg.in/square/go-jose.v1 v1.0.0-20160923000811-aa2e30fdd1fe
	gopkg.in/yaml.v2 v2.2.2
	layeh.com/radius v0.0.0-20180123164351-38e2cda15058
	sigs.k8s.io/yaml v1.1.0 // indirect
)
