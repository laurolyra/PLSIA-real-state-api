# Exemplos de Teste do Endpoint Assíncrono

## Como Testar

### 1. Teste com ID válido (123)
```bash
curl http://localhost:3000/residencial/123
```

**Resposta esperada (após ~1.5 segundos):**
```json
{
  "success": true,
  "data": {
    "id": "123",
    "address": "Rua das Flores, 123",
    "price": 250000,
    "bedrooms": 3,
    "bathrooms": 2,
    "area": 120,
    "type": "Casa",
    "pricePerMeter": 2083,
    "formattedPrice": "R$ 250.000,00",
    "createdAt": "2024-01-XX..."
  },
  "message": "Imóvel encontrado com sucesso"
}
```

### 2. Teste com ID válido (456)
```bash
curl http://localhost:3000/residencial/456
```

**Resposta esperada (após ~1.5 segundos):**
```json
{
  "success": true,
  "data": {
    "id": "456",
    "address": "Av. Principal, 789",
    "price": 180000,
    "bedrooms": 2,
    "bathrooms": 1,
    "area": 80,
    "type": "Apartamento",
    "pricePerMeter": 2250,
    "formattedPrice": "R$ 180.000,00",
    "createdAt": "2024-01-XX..."
  },
  "message": "Imóvel encontrado com sucesso"
}
```

### 3. Teste com ID inválido
```bash
curl http://localhost:3000/residencial/999
```

**Resposta esperada (após ~1 segundo):**
```json
{
  "success": false,
  "error": "Imóvel não encontrado",
  "message": "Falha ao buscar imóvel"
}
```

### 4. Teste com ID vazio
```bash
curl http://localhost:3000/residencial/
```

**Resposta esperada (imediata):**
```json
{
  "success": false,
  "error": "ID inválido",
  "message": "Falha ao buscar imóvel"
}
```

## O que Acontece Assincronamente

1. **Validação do ID** (imediata)
2. **Consulta ao banco** (simulada com 1 segundo de delay)
3. **Processamento dos dados** (simulada com 500ms de delay)
4. **Resposta ao cliente**

## Conceitos Demonstrados

- **async/await**: Para operações assíncronas
- **Promise**: Para simular operações de banco de dados
- **setTimeout**: Para simular delays
- **try/catch**: Para tratamento de erros
- **Validação**: Verificação de dados de entrada
- **Status HTTP**: Respostas apropriadas para cada situação 