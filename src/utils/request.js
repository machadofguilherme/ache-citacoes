const requestOperation = async (author) => {
  const url = 'https://achecitacoes-api.vercel.app/author';
  const data = { author };

  const request = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });

  const json = await request.json();
  return json;
}

export default requestOperation;