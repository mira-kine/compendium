export async function getPokemon(query, page, order, selectedType) {
  const params = new URLSearchParams();
  params.set('pokemon', query);
  params.set('page', page);
  params.set('sort', 'pokemon');
  params.set('direction', order);
  if (selectedType !== 'all') {
    params.set('type', selectedType);
  }
  const response = await fetch(
    `https://pokedex-alchemy.herokuapp.com/api/pokedex?${params.toString()}`
  );
  const data = await response.json();
  return data;
}

export async function getTypes() {
  const response = await fetch(`https://pokedex-alchemy.herokuapp.com/api/pokedex/types`);
  const data = await response.json();
  return data.map((item) => item.type);
}

export async function getCount() {
  const response = await fetch(`https://pokedex-alchemy.herokuapp.com/api/pokedex/types`);
  const data = await response.json();
  return data.map((item) => item.count);
}
