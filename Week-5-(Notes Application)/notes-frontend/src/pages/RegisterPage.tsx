import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axiosInstance from "../api/axiosInstance";
import { useToast } from "../utils/hooks/useToast";
import { AUTH_TEXT } from "../utils/constants/auth.constants";
import {
  REGISTER_FORM_DEFAULTS,
  REGISTER_ERROR_DEFAULTS
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

const RegisterPage = () => {
  const navigate = useNavigate();
  const { showToast } = useToast();

  const [formData, setFormData] = useState(REGISTER_FORM_DEFAULTS);

  const [errors, setErrors] = useState(REGISTER_ERROR_DEFAULTS);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const emailValue = formData.emailAddress.trim();
    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailValue);

    const newErrors = {
      fullName: formData.fullName ? "" : AUTH_TEXT.REGISTER.FULL_NAME_REQUIRED,
      emailAddress: !formData.emailAddress
        ? AUTH_TEXT.REGISTER.EMAIL_REQUIRED
        : !isValidEmail
          ? AUTH_TEXT.REGISTER.EMAIL_INVALID
          : "",
      password: !formData.password
        ? AUTH_TEXT.REGISTER.PASSWORD_REQUIRED
        : formData.password.length < 6
          ? AUTH_TEXT.REGISTER.PASSWORD_MIN_LENGTH
          : ""
    };

    setErrors(newErrors);
    return !newErrors.fullName && !newErrors.emailAddress && !newErrors.password;
  };

  const handleSubmit = async () => {
    if (!validate()) return;

    try {
      await axiosInstance.post("/authentication/register", formData);
      showToast(AUTH_TEXT.REGISTER.REGISTER_SUCCESS, "success");
      navigate("/");
    } catch (error: unknown) {
      if (error && typeof error === "object" && "response" in error) {
        const err = error as {
          response?: { data?: { message?: string } };
        };

        showToast(
          err.response?.data?.message || AUTH_TEXT.REGISTER.REGISTER_FAILED,
          "error"
        );
      } else {
        showToast(AUTH_TEXT.REGISTER.REGISTER_FAILED, "error");
      }
    }
  };

  return (
    <AuthWrapper>
      <AuthCard>
        <Logo>{AUTH_TEXT.LOGO}</Logo>

        <InputGroup>
          <Input
            name="fullName"
            placeholder={AUTH_TEXT.REGISTER.FULL_NAME_PLACEHOLDER}
            value={formData.fullName}
            onChange={handleChange}
            hasError={!!errors.fullName}
          />
          {errors.fullName && <ErrorText>{errors.fullName}</ErrorText>}
        </InputGroup>

        <InputGroup>
          <Input
            name="emailAddress"
            placeholder={AUTH_TEXT.REGISTER.EMAIL_PLACEHOLDER}
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
            placeholder={AUTH_TEXT.REGISTER.PASSWORD_PLACEHOLDER}
            value={formData.password}
            onChange={handleChange}
            hasError={!!errors.password}
          />
          {errors.password && <ErrorText>{errors.password}</ErrorText>}
        </InputGroup>

        <Button onClick={handleSubmit}>{AUTH_TEXT.REGISTER.BUTTON}</Button>
        <p style={{ marginTop: "1rem", textAlign: "center" }}>
          {AUTH_TEXT.REGISTER.LOGIN_PROMPT}{" "}
          <Link to="/">{AUTH_TEXT.REGISTER.LOGIN_LINK}</Link>
        </p>
      </AuthCard>
    </AuthWrapper>
  );
};

export default RegisterPage;
