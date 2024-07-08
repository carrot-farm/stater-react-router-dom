import { TSchema } from "@sinclair/typebox";
import { ComponentProps, FormEvent } from "react";
import { Form as BaseForm, useSubmit } from "react-router-dom";
import {
  ErrorObject,
  convertFormData,
  verifyFormData,
} from "../../utils/formUtils";

/**  폼 */
function Form<T extends TSchema>({
  // action,
  // method,
  model,
  disabledSubmit,
  onSubmit,
  onVerify,
  ...args
}: FormProps<T>) {
  const submit = useSubmit();

  /** 서브밋 이벤트 */
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = convertFormData({
      data: new FormData(e.currentTarget),
      model,
    });
    const errors = verifyFormData({
      data: formData,
      model,
    });

    // # 에러 핸들링을 위임
    if (typeof onVerify === "function") {
      if (errors) {
        onVerify(errors);
        return;
      }
      onVerify(undefined);
    }

    // # submit 이벤트
    if (typeof onSubmit === "function") {
      onSubmit(e);
    }

    // # submit 트리거
    if (disabledSubmit !== true) {
      submit(e.currentTarget);
    }
  };

  return <BaseForm onSubmit={handleSubmit} {...args} />;
}

/** ===== Types ===== */
type FormProps<T> = {
  /** 폼의 스키마 */
  model: T;
  /** true 일 경우 submit을 트리거 하지 않음 */
  disabledSubmit?: boolean;
  /** 필드 검증에 관한 핸들러 */
  onVerify?: (error: ErrorObject<T> | undefined) => void;
} & ComponentProps<typeof BaseForm>;

export default Form;
