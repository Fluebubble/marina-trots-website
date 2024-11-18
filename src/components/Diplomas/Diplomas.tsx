import React, { useEffect, useState } from "react";
import { Title } from "../Title/Title";
import { List } from "./List/List";
import { Certificate } from "../../types/certificate";

export const Diplomas = () => {
  const [certificates, setCertificates] = useState<Certificate[]>([]);

  useEffect(() => {
    const fetchCertificates = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.BASE_URL}data/certificates.json`
        );

        // const response = await fetch("/data/certificates.json");

        if (!response.ok) {
          throw new Error(`Ошибка сети: ${response.status}`);
        }

        const data = await response.json();
        const reversedCerts = data.reverse();

        setCertificates(reversedCerts);
      } catch (error) {
        console.error("Ошибка при загрузке данных:", error);
      }
    };

    fetchCertificates();
  }, []);

  return (
    <section className="section">
      <Title text="Дипломи та сертифікати" />
      <List certificates={certificates} />
    </section>
  );
};
