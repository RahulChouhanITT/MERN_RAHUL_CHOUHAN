import { useState, useRef, useEffect } from "react";
import { MdAccountCircle, MdLogout } from "react-icons/md";
import { useAuthentication } from "../../../utils/hooks/useAuthentication";
import { HEADER_LABELS } from "../../../utils/labels/uiLabels";
import {
  HeaderContainer,
  Logo,
  UserSection,
  UserIconWrapper,
  Dropdown,
  UserName,
  UserEmail,
  LogoutButton
} from "./headers.style";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const { logout, user } = useAuthentication();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <HeaderContainer>
      <Logo>{HEADER_LABELS.APP_TITLE}</Logo>

      <UserSection ref={dropdownRef}>
        <UserIconWrapper
          onClick={() => setIsOpen(!isOpen)}
          aria-label={HEADER_LABELS.ACCOUNT_BUTTON_ARIA}
        >
          <MdAccountCircle />
        </UserIconWrapper>

        {isOpen && (
          <Dropdown>
            <UserName>{user?.fullName || HEADER_LABELS.DEFAULT_USER_NAME}</UserName>
            <UserEmail>{user?.emailAddress || ""}</UserEmail>

            <LogoutButton onClick={logout}>
              <MdLogout />
              {HEADER_LABELS.LOGOUT_BUTTON}
            </LogoutButton>
          </Dropdown>
        )}
      </UserSection>
    </HeaderContainer>
  );
};

export default Header;
