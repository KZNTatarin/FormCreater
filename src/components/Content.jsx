import MyButton from "../UI/Button/MyButton";
import {useFormStore} from "../store/store";

export default function Content() {
  const {dates} = useFormStore();

  return (
    <content>
      <h2 style={{ textAlign: "center" }}>ФОРМА</h2>
      <form id="created-form">
        
        {dates.map((data) => {
          if (
            data.element === "text" ||
            data.element === "password" ||
            data.element === "tel"
          ) {
            return (
              <>
                <label>{data.label}</label> <br />
                <input placeholder={data.placeholder} type={data.type} /> <br />
              </>
            );
          } else if (data.element === "textarea") {
            return (
              <>
                <label for={data.shortName}>{data.label}</label> <br />
                <textarea
                  style={{ resize: "vertical" }}
                  placeholder={data.placeholder}
                  id={data.shortName}
                  maxlength={data.maxlength === 0 ? false : data.maxlength}
                ></textarea>
                <br />
              </>
            );
          } else if (data.element === "email") {
            return (
              <>
                <label for="">{data.label}</label> <br />
                <input
                  pattern={
                    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
                  }
                  type={data.type}
                />
              </>
            );
          } else if (data.element === "checkbox" || data.element === "radio") {
            return (
              <>
                <fieldset style={{ width: "row" }}>
                  <legend>{data.fieldName}</legend>
                  {data.answears.map((answear) => {
                    return (
                      <div>
                        <input
                          type={data.type}
                          id={answear.shortName}
                          name={data.shortFieldName}
                          value={answear.shortName}
                        />
                        <label for={answear.shortName}>{answear.name}</label>
                      </div>
                    );
                  })}
                </fieldset>
              </>
            );
          } else {
            return <h4>Форма пуста</h4>;
          }
        })}

        <MyButton>Отправить</MyButton>
      </form>
    </content>
  );
}
