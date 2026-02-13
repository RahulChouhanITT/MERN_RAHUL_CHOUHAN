import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuthentication } from "../utils/hooks/useAuthentication";
import { useToast } from "../utils/hooks/useToast";
import { AUTH_TEXT } from "../utils/constants/auth.constants";
import {
  LOGIN_FORM_DEFAULTS,
  LOGIN_ERROR_DEFAULTS
} from "../utils/constants/defaultValues";
import {
  AuthWrapper,
  AuthCard,
  Logo,
  InputGroup,
  Input,
  ErrorText,
  Button
} from "../components/auth/Auth.styles";

const LoginPage = () => {
  const { login } = useAuthentication();
  const { showToast } = useToast();

  const [formData, setFormData] = useState(LOGIN_FORM_DEFAULTS);

  const [errors, setErrors] = useState(LOGIN_ERROR_DEFAULTS);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors = {
      emailAddress: formData.emailAddress ? "" : AUTH_TEXT.LOGIN.EMAIL_REQUIRED,
      password: formData.password ? "" : AUTH_TEXT.LOGIN.PASSWORD_REQUIRED
    };

    setErrors(newErrors);
    return !newErrors.emailAddress && !newErrors.password;
  };

  const handleSubmit = async () => {
    if (!validate()) return;

    try {
      await login(formData.emailAddress, formData.password);
    } catch {
      showToast(AUTH_TEXT.LOGIN.INVALID_CREDENTIALS, "error");
    }
  };

  return (
    <AuthWrapper>
      <AuthCard>
        <Logo>{AUTH_TEXT.LOGO}</Logo>

        <InputGroup>
          <Input
            name="emailAddress"
            placeholder={AUTH_TEXT.LOGIN.EMAIL_PLACEHOLDER}
            value={formData.emailAddress}
            onChange={handleChange}
            hasError={!!errors.emailAddress}
          />
          {errors.emailAddress && <ErrorText>{errors.emailAddress}</ErrorText>}
        </InputGroup>

        <InputGroup>
          <Input
            type="password"
            name="password"
            placeholder={AUTH_TEXT.LOGIN.PASSWORD_PLACEHOLDER}
            value={formData.password}
            onChange={handleChange}
            hasError={!!errors.password}
          />
          {errors.password && <ErrorText>{errors.password}</ErrorText>}
        </InputGroup>

        <Button onClick={handleSubmit}>{AUTH_TEXT.LOGIN.BUTTON}</Button>

        <p style={{ marginTop: "1rem", textAlign: "center" }}>
          {AUTH_TEXT.LOGIN.REGISTER_PROMPT}{" "}
          <Link to="/register">{AUTH_TEXT.LOGIN.REGISTER_LINK}</Link>
        </p>
      </AuthCard>
    </AuthWrapper>
  );
};

export default LoginPage;
