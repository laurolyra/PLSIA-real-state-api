# Testes Unitários com Jest

## O que são Testes Unitários?

Testes unitários são testes que verificam se uma **unidade específica** de código (função, rota, método) funciona corretamente de forma **isolada**.

## Estrutura dos Testes

### 1. **Arrange** (Preparar)
- Configurar dados de teste
- Preparar mocks
- Definir variáveis esperadas

### 2. **Act** (Executar)
- Chamar a função/rota que está sendo testada
- Executar a ação principal

### 3. **Assert** (Verificar)
- Comparar o resultado real com o esperado
- Verificar se o comportamento está correto

## Exemplo Prático: Rota GET /

```typescript
describe('GET /residencial/', () => {
  it('deve retornar "houses List"', async () => {
    // Arrange: Preparar o teste
    const expectedResponse = 'houses List';
    
    // Act: Executar a ação (fazer a requisição)
    const response = await request(app)
      .get('/residencial/')
      .expect(200);
    
    // Assert: Verificar o resultado
    expect(response.text).toBe(expectedResponse);
  });
});
```

## Como Executar os Testes

### Executar todos os testes:
```bash
npm test
```

### Executar em modo watch (recomendado para desenvolvimento):
```bash
npm run test:watch
```

### Executar com cobertura de código:
```bash
npm run test:coverage
```

## Conceitos Importantes

### **describe()**
- Agrupa testes relacionados
- Cria uma estrutura hierárquica
- Facilita a organização

### **it() ou test()**
- Define um teste individual
- Deve testar apenas uma funcionalidade
- Nome deve ser descritivo

### **expect()**
- Verifica se o resultado é o esperado
- Múltiplos tipos de asserções disponíveis
- Exemplo: `expect(value).toBe(expected)`

## Tipos de Asserções Comuns

```typescript
// Igualdade
expect(value).toBe(expected);
expect(value).toEqual(expected);

// Verificações booleanas
expect(value).toBeTruthy();
expect(value).toBeFalsy();

// Verificações de tipo
expect(value).toBeInstanceOf(Array);
expect(typeof value).toBe('string');

// Verificações de arrays
expect(array).toContain(item);
expect(array).toHaveLength(3);

// Verificações de objetos
expect(object).toHaveProperty('name');
expect(object).toMatchObject({ id: 1 });
```

## Por que Testar a Rota GET /?

A rota `GET /` é perfeita para começar porque:

1. **Simples**: Retorna apenas uma string
2. **Síncrona**: Não usa async/await
3. **Previsível**: Sempre retorna o mesmo resultado
4. **Rápida**: Resposta imediata

## Diferença entre Rota Síncrona e Assíncrona

### **Rota Síncrona (GET /)**
```typescript
residencialRouter.get('/', (req: Request, res: Response) => {
  res.send('houses List'); // Resposta imediata
});
```

### **Rota Assíncrona (GET /:id)**
```typescript
residencialRouter.get('/:id', async (req: Request, res: Response) => {
  const result = await residencialFind(id); // Aguarda operação
  res.json(result);
});
```

## Benefícios dos Testes Unitários

1. **Detectar bugs** rapidamente
2. **Documentar** como o código deve funcionar
3. **Facilitar refatoração** com segurança
4. **Melhorar design** do código
5. **Aumentar confiança** nas mudanças

## Próximos Passos

1. Execute `npm test` para ver os testes funcionando
2. Modifique a rota e veja os testes falharem
3. Experimente adicionar novos testes
4. Explore outros tipos de asserções do Jest 