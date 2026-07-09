# Gerenciador de Candidaturas

Extensão para Firefox que ajuda a registrar e acompanhar candidaturas de emprego em um único lugar. Busca facilitar o controle das etapas dos processos seletivos de vagas, sendo uma alternativa para planilhas. Projeto ainda em desenvolvimento. 

## Como executar o código localmente

Inicialmente, clone o projeto.
``` 
git clone https://github.com/Laura-Sangalli/gerenciador-de-candidaturas.git
```
Para o frontend, execute na CLI de seu computador:
```
cd gerenciador-de-candidaturas/frontend
nvm use
npm install
npm run dev
```
Para o backend, execute também na CLI de seu computador:

```
cd ..
cd backend
python -m venv .venv

# Linux/macOS 
source .venv/bin/activate

# Windows
.venv\Scripts\activate

pip install -r requirements.txt

uvicorn app.main:app --reload
```
