import { RequiredNumberSchema } from "yup/lib/number";
import { AnyObject, ObjectShape } from "yup/lib/object";
import { RequiredStringSchema } from "yup/lib/string";

export interface IFormSchema extends ObjectShape {
  addressTo: RequiredStringSchema<string | undefined, AnyObject>;
  amount: RequiredNumberSchema<number | undefined, AnyObject>;
  message: RequiredStringSchema<string | undefined, AnyObject>;
}