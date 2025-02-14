'use client'
import React from 'react'
import { useTranslation } from 'react-i18next';

const Product = () => {
  const { t } = useTranslation();

  return (
    <div>
      <div>{t("welcome") || "Welcome"}</div>
    </div>
  );
}

export default Product;
