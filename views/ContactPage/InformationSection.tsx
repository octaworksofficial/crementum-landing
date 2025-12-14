import styled from 'styled-components';

export default function InformationSection() {
  return (
    <Wrapper>
      <h3>İletişim Bilgileri</h3>
      <ContactItem>
        <ContactLabel>Şirket:</ContactLabel>
        <ContactValue>CERİLAS YÜKSEK TEKNOLOJİ SANAYİ VE TİCARET ANONİM ŞİRKETİ</ContactValue>
      </ContactItem>
      <ContactItem>
        <ContactLabel>KEP Adresi:</ContactLabel>
        <ContactValue>cerilas@hs01.kep.tr</ContactValue>
      </ContactItem>
      <ContactItem>
        <ContactLabel>Telefon:</ContactLabel>
        <ContactValue>0544 943 07 26</ContactValue>
      </ContactItem>
      <ContactItem>
        <ContactLabel>Vergi No:</ContactLabel>
        <ContactValue>206156143500001</ContactValue>
      </ContactItem>
      <ContactItem>
        <ContactLabel>Adres:</ContactLabel>
        <ContactValue>Çamtepe Mah. Mahmut Tevfik Atay Bul. D Blok No: 4D İç Kapı No: 11 Şahinbey / Gaziantep</ContactValue>
      </ContactItem>
      <SupportHours>
        <h4>Destek Saatleri</h4>
        <p>Pazartesi - Cuma: 09:00 - 18:00</p>
        <p>Cumartesi: 10:00 - 14:00</p>
      </SupportHours>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  flex: 1;
  margin-right: 3rem;
  margin-bottom: 3rem;

  h3 {
    font-size: 2.5rem;
    margin-bottom: 2rem;
    color: rgb(var(--text));
  }
`;

const ContactItem = styled.div`
  margin-bottom: 1.5rem;
`;

const ContactLabel = styled.span`
  font-size: 1.6rem;
  font-weight: 600;
  color: rgb(var(--text));
  margin-right: 0.5rem;
`;

const ContactValue = styled.span`
  font-size: 1.6rem;
  color: rgba(var(--text), 0.7);
`;

const SupportHours = styled.div`
  margin-top: 3rem;
  padding-top: 2rem;
  border-top: 1px solid rgba(var(--text), 0.1);

  h4 {
    font-size: 1.8rem;
    margin-bottom: 1rem;
    color: rgb(var(--text));
  }

  p {
    font-size: 1.4rem;
    color: rgba(var(--text), 0.7);
    margin-bottom: 0.5rem;
  }
`;
