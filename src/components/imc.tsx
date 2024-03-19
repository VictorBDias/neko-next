'use client';

import { FormEvent, useState } from 'react';

export default function Imc() {
  const [imc, setImc] = useState<number | null>(null);
  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const altura = formData.get('altura');
    const peso = formData.get('peso');

    if (altura && peso) setImc(peso / (altura * altura));
  }

  return (
    <form onSubmit={onSubmit}>
      <label htmlFor="altura">Altura</label>
      <input name="altura" type="number" />
      <label htmlFor="peso">Peso</label>
      <input name="peso" type="number" />
      <button type="submit">Submit</button>
      {imc && <p>IMC: {imc}</p>}
    </form>
  );
}
