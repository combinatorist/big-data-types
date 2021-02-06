package org.datatools.bigdatatypes.spark

import org.apache.spark.sql.types.{IntegerType, StringType, StructField, StructType}
import org.datatools.bigdatatypes.UnitSpec
import org.datatools.bigdatatypes.conversions.SqlTypeConversion
import org.datatools.bigdatatypes.formats.Formats.implicitDefaultFormats
import org.datatools.bigdatatypes.spark.SqlTypeConversionSpark._
import org.datatools.bigdatatypes.types.basic.{Nullable, Repeated, Required, SqlInt, SqlString, SqlStruct}

class SqlTypeConversionSparkSpec extends UnitSpec {

  "Simple Spark DataType" should "be converted into SqlType" in {
    SqlTypeConversion[IntegerType].getType shouldBe SqlInt()
  }

  "StructField nullable" should "be converted into Nullable SqlType" in {
    val sf = StructField("myInt", IntegerType, nullable = true)
    sf.getType shouldBe SqlInt(Nullable)
    SqlTypeConversionSpark(sf).getType shouldBe SqlInt(Nullable)
  }

  "StructField required" should "be converted into Required SqlType" in {
    val sf = StructField("myInt", IntegerType, nullable = false)
    sf.getType shouldBe SqlInt()
    SqlTypeConversionSpark(sf).getType shouldBe SqlInt(Required)
  }

  "StructType" should "be converted into SqlStruct" in {
    val sf = StructField("myInt", IntegerType, nullable = false)
    val sf2 = StructField("myString", StringType, nullable = true)
    val st = StructType(List(sf, sf2))
    val expected = SqlStruct(List(("myInt", SqlInt()), ("myString", SqlString(Nullable))))
    SqlTypeConversionSpark(st).getType shouldBe expected
    st.getType shouldBe expected
  }

  "SparkSchema from Case Class" should "be converted into SqlStruct" in {
    case class Dummy(myInt: Int, myString: String)
    val expected = SqlStruct(List(("myInt", SqlInt()), ("myString", SqlString())))
    SqlTypeConversionSpark(SparkTypes[Dummy].sparkSchema).getType shouldBe expected
  }

  "StructType with Arrays" should "be converted into SqlStruct with Repeated" in {
    case class Dummy(myString: String, myList: List[Int])
    val schema = SparkTypes[Dummy].sparkSchema
    val expected = SqlStruct(List(("myString", SqlString()), ("myList", SqlInt(Repeated))))
    schema.getType shouldBe expected
  }

}
