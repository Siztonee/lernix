from fastapi import FastAPI
import os

app = FastAPI()

@app.get("/")
async def read_root():
    return {"message": "AI Service is running"}

@app.get("/health")
async def health_check():
    return {"status": "ok", "version": "1.0.0"}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)