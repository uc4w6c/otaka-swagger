# api-spec-sample
swaggerのsampleプロジェクトです

# 起動方法(ローカル環境)
```
docker-compose up
```
以下のコンテナが起動します。

#### swagger-ui
[公式へのリンク](https://swagger.io/tools/swagger-ui/)

#### モックサーバー
[apisprout](https://github.com/danielgtaylor/apisprout)を使ってswaggerの定義ファイルからモックサーバーを起動します。

main.ymlに変更があったときに自動的にリロードするようにしています。

APIのポートはプロジェクトごとに異なるので、docker-compose.ymlを参照してください。

#### swagger-watch
spec/ 配下にあるymlファイルの変更を監視します。

変更を検知したら一つのymlファイル(combined.yml)に統合する処理が走ります。

### ディレクトリ構成
spec配下に複数のプロジェクトの仕様書をディレクトリで分けて置いています。

このようなイメージです。
```
api-spec
├── spec
│   └── プロジェクト名
│       ├── combined.yml
│       ├── components
│       ├── main.yml
│       └── paths
```
