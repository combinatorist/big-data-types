"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[407],{4450:(e,a,s)=>{s.r(a),s.d(a,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var t=s(5893),n=s(1151);const r={sidebar_position:4},i="Spark",o={id:"Modules/Spark",title:"Spark",description:"Spark Schema from Case Class",source:"@site/../docs/Modules/Spark.md",sourceDirName:"Modules",slug:"/Modules/Spark",permalink:"/big-data-types/docs/Modules/Spark",draft:!1,unlisted:!1,editUrl:"https://github.com/data-tools/big-data-types/edit/main/website/../docs/Modules/Spark.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"BigQuery",permalink:"/big-data-types/docs/Modules/BigQuery"},next:{title:"Cassandra",permalink:"/big-data-types/docs/Modules/Cassandra"}},l={},c=[{value:"Spark Schema from Case Class",id:"spark-schema-from-case-class",level:2},{value:"Create a Dataframe",id:"create-a-dataframe",level:3},{value:"Spark Schema from Multiple Case Classes",id:"spark-schema-from-multiple-case-classes",level:3},{value:"Spark Schema from other types",id:"spark-schema-from-other-types",level:3},{value:"Field transformations",id:"field-transformations",level:2}];function m(e){const a={admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",p:"p",pre:"pre",...(0,n.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.h1,{id:"spark",children:"Spark"}),"\n",(0,t.jsx)(a.h2,{id:"spark-schema-from-case-class",children:"Spark Schema from Case Class"}),"\n",(0,t.jsx)(a.p,{children:"With Spark module, Spark Schemas can be created from Case Classes or from any other type of the library."}),"\n",(0,t.jsx)(a.admonition,{type:"info",children:(0,t.jsx)(a.p,{children:"Spark is not available for Scala 3, so, this module only works with Scala 2.12 and Scala 2.13"})}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-scala",children:"import org.apache.spark.sql.types.StructType\nimport org.datatools.bigdatatypes.spark.SparkSchemas\n//an implicit Formats class is needed, defaultFormats does no transformations\n//it can be created as implicit val instead of using this import\nimport org.datatools.bigdatatypes.formats.Formats.implicitDefaultFormats\n\ncase class MyModel(myInt: Integer, myString: String)\nval schema: StructType = SparkSchemas.schema[MyModel]\n"})}),"\n",(0,t.jsx)(a.p,{children:"It works for Options, Sequences and any level of nested objects"}),"\n",(0,t.jsx)(a.p,{children:"Also, a Spark Schema can be extracted from a Case Class instance"}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-scala",children:'val model = MyModel(1, "test")\nmodel.asSparkSchema\n'})}),"\n",(0,t.jsx)(a.h3,{id:"create-a-dataframe",children:"Create a Dataframe"}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-scala",children:'case class Dummy(myInt: Int, myString: String)\n\nimplicit val default: Formats = DefaultFormats\nval schema = SparkSchemas.schema[Dummy]\nval df = spark.read.schema(schema).json("dummy.json")\ndf.show(4)\n/*\n+-----+--------+\n|myInt|myString|\n+-----+--------+\n|    1|    test|\n|    2|   test2|\n|    3|   test3|\n|    4|   test4|\n+-----+--------+\n*/\n'})}),"\n",(0,t.jsx)(a.h3,{id:"spark-schema-from-multiple-case-classes",children:"Spark Schema from Multiple Case Classes"}),"\n",(0,t.jsx)(a.p,{children:"Also, a schema can be created from multiple case classes.\nAs an example, it could be useful for those cases where we read data using a Case Class,\nand we want to append some metadata fields, but we don't want to create another Case Class with exactly the same fields plus a few more."}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-scala",children:"import java.sql.Timestamp\nimport org.apache.spark.sql.types.StructType\nimport org.datatools.bigdatatypes.spark.SparkSchemas\nimport org.datatools.bigdatatypes.formats.Formats.implicitDefaultFormats\n \ncase class MyModel(myInt: Integer, myString: String)\ncase class MyMetadata(updatedAt: Timestamp, version: Int)\nval schema: StructType = SparkSchemas.schema[MyModel, MyMetadata]\n/*\nschema =\n List(\n    StructField(myInt, IntegerType, false), \n    StructField(myString, StringType, false)\n    StructField(updatedAt, TimestampType, false)\n    StructField(version, IntegerType, false)\n   )\n*/\n"})}),"\n",(0,t.jsx)(a.p,{children:"Another example, creating a Dataframe"}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-scala",children:'case class Dummy(myInt: Int, myString: String)\ncase class Append(myTimestamp: Timestamp)\n\nimplicit val default: Formats = DefaultFormats\nval schema = SparkSchemas.schema[Dummy, Append]\nval df = spark.read.schema(schema).json("my_file.json")\ndf.show(4)\n/*\n+------+---------+-------------------+\n|my_int|my_string|       my_timestamp|\n+------+---------+-------------------+\n|     1|     test|2021-01-24 10:07:39|\n|     2|    test2|2021-01-24 10:07:39|\n|     3|    test3|2021-01-24 10:07:39|\n|     4|    test4|2021-01-24 10:07:39|\n+------+---------+-------------------+\n*/\n'})}),"\n",(0,t.jsx)(a.h3,{id:"spark-schema-from-other-types",children:"Spark Schema from other types"}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-scala",children:"val myBigQuerySchema: Schema = ???\nval schema: StructType = myBigQuerySchema.asSparkSchema\n"})}),"\n",(0,t.jsxs)(a.admonition,{type:"tip",children:[(0,t.jsx)(a.p,{children:"There are a few imports that have to be included in order to use this kind of transformations, depending on the types."}),(0,t.jsx)(a.p,{children:"IDEs should be able to find them."})]}),"\n",(0,t.jsx)(a.h2,{id:"field-transformations",children:"Field transformations"}),"\n",(0,t.jsx)(a.p,{children:"Also, custom transformations can be applied to field names, something that usually is quite hard to do with Spark Datasets.\nFor example, working with CamelCase Case Classes but using snake_case field names in Spark Schema."}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-scala",children:"import org.apache.spark.sql.types.StructType\nimport org.datatools.bigdatatypes.spark.SparkSchemas\n//implicit formats for transform keys to snake_case\nimport org.datatools.bigdatatypes.formats.Formats.implicitSnakifyFormats\n\ncase class MyModel(myInt: Integer, myString: String)\nval schema: StructType = SparkSchemas.schema[MyModel]\n/*\nschema =\n List(\n    StructField(my_int, IntegerType, false), \n    StructField(my_string, StringType, false)\n   )\n*/\n"})}),"\n",(0,t.jsx)(a.hr,{})]})}function d(e={}){const{wrapper:a}={...(0,n.a)(),...e.components};return a?(0,t.jsx)(a,{...e,children:(0,t.jsx)(m,{...e})}):m(e)}},1151:(e,a,s)=>{s.d(a,{Z:()=>o,a:()=>i});var t=s(7294);const n={},r=t.createContext(n);function i(e){const a=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function o(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),t.createElement(r.Provider,{value:a},e.children)}}}]);