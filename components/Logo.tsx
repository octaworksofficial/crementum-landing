import styled from 'styled-components';

export default function Logo({ ...rest }) {
  return (
    <LogoContainer {...rest}>
      <CrmPart>CRM</CrmPart>
      <EntumPart>ENTUM</EntumPart>
    </LogoContainer>
  );
}

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: 2.4rem;
  font-weight: 700;
  letter-spacing: -0.02em;
  cursor: pointer;
`;

const CrmPart = styled.span`
  color: #1890ff;
  font-weight: 800;
`;

const EntumPart = styled.span`
  color: rgb(var(--text));
  font-weight: 400;
`;
