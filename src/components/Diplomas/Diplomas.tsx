import React, { useEffect, useState } from "react";
import { Title } from "../Title/Title";
import { List } from "./List/List";
import { Certificate } from "../../types/certificate";

export const Diplomas = () => {
  // const [certificates, setCertificates] = useState([]);
  const [certificates, setCertificates] = useState<Certificate[]>([]);

  useEffect(() => {
    const fetchCertificates = async () => {
      try {
        const response = await fetch("/data/certificates.json");

        if (!response.ok) {
          throw new Error(`Ошибка сети: ${response.status}`);
        }

        const data = await response.json();

        setCertificates(data);
      } catch (error) {
        console.error("Ошибка при загрузке данных:", error);
      }
    };

    fetchCertificates();
  }, []);

  return (
    <section className="section">
      <Title text="Дипломы и сертификаты" />
      <List certificates={certificates} />
      {/* <button
        type="button"
        className="certificates-gallery__button"
      >
        Показать все документы
      </button> */}
    </section>
  );
};
