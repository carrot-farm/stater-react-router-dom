import { Static, TSchema } from "@sinclair/typebox";
import { TypeCompiler } from "@sinclair/typebox/compiler";
import { Value } from "@sinclair/typebox/value";

/** 폼데이터를 형식에 맞는 데이터로 전환 */
export const convertFormData = <T extends TSchema>({
  data,
  model,
}: {
  data: FormData;
  model: T;
}) => {
  const formData = Object.fromEntries(data);
  const convertedData = Value.Convert(model, formData);

  return convertedData as Static<T>;
};

/** 폼데이터의 유효성 검사 */
export const verifyFormData = <D, M extends TSchema>({
  data,
  model,
}: {
  data: D;
  model: M;
}) => {
  const C = TypeCompiler.Compile(model);
  const isValid = C.Check(data);

  // # 유효성 검증 실패
  if (isValid === true) {
    return;
  }

  // # 에러 메시지 추출 후 반환
  const errors = [...C.Errors(data)].map((a) => ({
    path: a.path,
    message: a.message,
  }));

  return errors?.reduce(
    (acc, cur) => ({
      ...acc,
      [cur.path.slice(1)]: cur.message,
    }),
    {}
  ) as ErrorObject<M>;
};

export type ErrorObject<T> = T extends TSchema
  ? Partial<Record<keyof T["properties"], string>>
  : never;
