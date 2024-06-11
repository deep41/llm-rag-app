from fastapi import FastAPI
from langchain_community.llms import Ollama
from langchain_community.embeddings import OllamaEmbeddings

from langchain.prompts import PromptTemplate
from langchain_core.output_parsers import StrOutputParser
from operator import itemgetter

MODEL = 'llama2'
model = Ollama(model=MODEL)
embeddings = OllamaEmbeddings()
template = """
Answer the question based on the context below. If you can't answer the question, reply "I don't know".

Context: {context}

Question: {question}
"""
prompt = PromptTemplate.from_template(template)
parser = StrOutputParser()

chain = (
    {
    # "context": itemgetter("question") | retriever,
    "context": itemgetter("context"),
    "question": itemgetter("question")
    } 
    | prompt 
    | model 
    | parser
    )

app = FastAPI()

@app.get("/")
def read_root():
    return {"Hello": "World"}

@app.get("/chat")
def tester(message: str):
    print(message)
    reply = chain.invoke({"question": message, "context": "You are a helpful chat bot, help the user as much as possible"})
    return {"content": reply}