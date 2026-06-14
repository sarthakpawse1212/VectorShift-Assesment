How To Run The Project

Backend:

```bash
enable venv - venv/Scripts - run activate
pip install -r backend/requirements.txt
python -m uvicorn main:app --reload
```

Frontend:

```bash
cd frontend
npm install
npm start
```

Frontend runs on:

```txt
http://localhost:3000
```

Backend runs on:

```txt
http://localhost:8000
```