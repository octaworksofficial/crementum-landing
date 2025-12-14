import NextLink from 'next/link';
import React, { useState } from 'react';
import styled from 'styled-components';
import useEscClose from 'hooks/useEscKey';
import { media } from 'utils/media';
import Button from './Button';
import CloseIcon from './CloseIcon';
import Container from './Container';
import Input from './Input';
import Overlay from './Overlay';

export interface DemoRequestModalProps {
  onClose: () => void;
  source?: string;
  planInterest?: string;
}

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  companyName: string;
  companySize: string;
  message: string;
}

export default function DemoRequestModal({ onClose, source = 'website', planInterest = '' }: DemoRequestModalProps) {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    phone: '',
    companyName: '',
    companySize: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  useEscClose({ onClose });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      const res = await fetch('/api/demo-request', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          source,
          planInterest,
        }),
      });

      if (!res.ok) {
        throw new Error('Bir hata oluştu. Lütfen tekrar deneyin.');
      }

      setIsSuccess(true);
    } catch (err) {
      setError('Bir hata oluştu. Lütfen tekrar deneyin.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Overlay>
      <Container>
        <Card onSubmit={handleSubmit}>
          <CloseIconContainer>
            <CloseIcon onClick={onClose} />
          </CloseIconContainer>

          {isSuccess ? (
            <SuccessState>
              <SuccessIcon>✓</SuccessIcon>
              <SuccessTitle>Talebiniz Alındı!</SuccessTitle>
              <SuccessMessage>
                En kısa sürede sizinle iletişime geçeceğiz. Teşekkür ederiz!
              </SuccessMessage>
              <Button onClick={onClose}>Kapat</Button>
            </SuccessState>
          ) : (
            <>
              <Title>Demo Talep Edin</Title>
              <Subtitle>
                Formu doldurun, size özel bir demo planlayalım veya teklif hazırlayalım.
              </Subtitle>

              {error && <ErrorMessage>{error}</ErrorMessage>}

              <FormGrid>
                <InputGroup>
                  <Label htmlFor="fullName">Ad Soyad *</Label>
                  <StyledInput
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Adınız Soyadınız"
                    required
                  />
                </InputGroup>

                <InputGroup>
                  <Label htmlFor="email">Email *</Label>
                  <StyledInput
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="ornek@sirket.com"
                    required
                  />
                </InputGroup>

                <InputGroup>
                  <Label htmlFor="phone">Telefon</Label>
                  <StyledInput
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+90 5XX XXX XX XX"
                  />
                </InputGroup>

                <InputGroup>
                  <Label htmlFor="companyName">Şirket Adı</Label>
                  <StyledInput
                    id="companyName"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                    placeholder="Şirketinizin adı"
                  />
                </InputGroup>

                <InputGroup fullWidth>
                  <Label htmlFor="companySize">Şirket Büyüklüğü</Label>
                  <StyledSelect
                    id="companySize"
                    name="companySize"
                    value={formData.companySize}
                    onChange={handleChange}
                  >
                    <option value="">Seçiniz</option>
                    <option value="1-10">1-10 çalışan</option>
                    <option value="11-50">11-50 çalışan</option>
                    <option value="51-200">51-200 çalışan</option>
                    <option value="201-500">201-500 çalışan</option>
                    <option value="500+">500+ çalışan</option>
                  </StyledSelect>
                </InputGroup>

                <InputGroup fullWidth>
                  <Label htmlFor="message">Mesajınız</Label>
                  <StyledTextarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Bize ihtiyaçlarınızdan bahsedin..."
                    rows={4}
                  />
                </InputGroup>
              </FormGrid>

              <SubmitButton as="button" type="submit" disabled={isSubmitting}>
                {isSubmitting ? 'Gönderiliyor...' : 'Demo Talep Et'}
              </SubmitButton>

              <PrivacyNote>
                Formu göndererek <NextLink href="/privacy-policy">Gizlilik Politikamızı</NextLink> kabul etmiş olursunuz.
              </PrivacyNote>
            </>
          )}
        </Card>
      </Container>
    </Overlay>
  );
}

const Card = styled.form`
  display: flex;
  position: relative;
  flex-direction: column;
  margin: auto;
  padding: 4rem 3rem;
  background: rgb(var(--modalBackground));
  border-radius: 1.2rem;
  max-width: 60rem;
  max-height: 90vh;
  overflow-y: auto;
  color: rgb(var(--text));

  ${media('<=tablet')} {
    padding: 3rem 2rem;
    max-height: 95vh;
  }
`;

const CloseIconContainer = styled.div`
  position: absolute;
  right: 2rem;
  top: 2rem;

  svg {
    cursor: pointer;
    width: 2rem;
  }
`;

const Title = styled.h2`
  font-size: 2.8rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 1rem;
`;

const Subtitle = styled.p`
  font-size: 1.6rem;
  opacity: 0.7;
  text-align: center;
  margin-bottom: 3rem;
`;

const FormGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;

  ${media('<=tablet')} {
    grid-template-columns: 1fr;
  }
`;

const InputGroup = styled.div<{ fullWidth?: boolean }>`
  grid-column: ${(p) => (p.fullWidth ? '1 / -1' : 'auto')};
`;

const Label = styled.label`
  display: block;
  font-size: 1.4rem;
  font-weight: 600;
  margin-bottom: 0.8rem;
`;

const StyledInput = styled(Input)`
  width: 100%;
`;

const StyledSelect = styled.select`
  width: 100%;
  border: 1px solid rgb(var(--inputBackground));
  background: rgb(var(--inputBackground));
  border-radius: 0.6rem;
  font-size: 1.6rem;
  padding: 1.8rem;
  box-shadow: var(--shadow-md);
  color: rgb(var(--text));

  &:focus {
    outline: none;
    box-shadow: var(--shadow-lg);
  }
`;

const StyledTextarea = styled.textarea`
  width: 100%;
  border: 1px solid rgb(var(--inputBackground));
  background: rgb(var(--inputBackground));
  border-radius: 0.6rem;
  font-size: 1.6rem;
  padding: 1.8rem;
  box-shadow: var(--shadow-md);
  color: rgb(var(--text));
  resize: vertical;
  font-family: inherit;

  &:focus {
    outline: none;
    box-shadow: var(--shadow-lg);
  }
`;

const SubmitButton = styled(Button)`
  margin-top: 3rem;
  width: 100%;
  padding: 1.8rem;
  font-size: 1.6rem;

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

const PrivacyNote = styled.p`
  font-size: 1.2rem;
  opacity: 0.6;
  text-align: center;
  margin-top: 1.5rem;

  a {
    color: rgb(var(--primary));
    text-decoration: underline;
  }
`;

const ErrorMessage = styled.div`
  background: rgba(255, 0, 0, 0.1);
  border: 1px solid rgba(255, 0, 0, 0.3);
  color: #ff4444;
  padding: 1rem 1.5rem;
  border-radius: 0.6rem;
  margin-bottom: 2rem;
  text-align: center;
`;

const SuccessState = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 3rem 0;
`;

const SuccessIcon = styled.div`
  width: 8rem;
  height: 8rem;
  border-radius: 50%;
  background: rgb(var(--primary));
  color: white;
  font-size: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;
`;

const SuccessTitle = styled.h3`
  font-size: 2.4rem;
  font-weight: bold;
  margin-bottom: 1rem;
`;

const SuccessMessage = styled.p`
  font-size: 1.6rem;
  opacity: 0.7;
  margin-bottom: 3rem;
`;
