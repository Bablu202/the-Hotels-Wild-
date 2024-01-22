import styled from "styled-components";
import { useUser } from "../features/authentication/useUser";
import Spinner from "./Spinner";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Fullpage = styled.div`
  height: 100vh;
  background-color: var(--color-grey-50);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default function ProtectedRoute({ children }) {
  const navigate = useNavigate();
  //loading auth user
  const { isLoading, isAuthenticated } = useUser();

  //if no auth user redirect to login PAGE
  useEffect(
    function () {
      if (!isAuthenticated && !isLoading) navigate("/login");
    },
    [isAuthenticated, isLoading, navigate]
  );
  //spinner while loading
  if (isLoading)
    return (
      <Fullpage>
        <Spinner />
      </Fullpage>
    );
  if (isAuthenticated) {
    return children;
  }
  //if auth user render main PAGE
}
