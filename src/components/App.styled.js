import styled from "styled-components";

export const ButtonMenu = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 20px;
`;

export const Button = styled.button`
  padding: 12px 24px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }

  /* Додайте додаткові стилі для кожної кнопки, якщо потрібно */
  &.profile {
    background-color: #28a745;
  }

  &.statistics {
    background-color: #ffc107;
  }

  &.friendlist {
    background-color: #17a2b8;
  }

  &.transactionhistory {
    background-color: #dc3545;
  }
`;