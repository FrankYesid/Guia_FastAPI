'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Separator } from '@/components/ui/separator'
import { BookOpen, Code, Database, FileText, Play, Settings, TestTube, Upload, Copy, ExternalLink, GraduationCap, Rocket } from 'lucide-react'

export default function FastAPIGuide() {
  const [activeSection, setActiveSection] = useState('introduction')
  const [copiedCode, setCopiedCode] = useState<string | null>(null)
  const [apiResponse, setApiResponse] = useState('')
  const [apiRequest, setApiRequest] = useState({
    method: 'GET',
    endpoint: '',
    body: ''
  })

  const sections = [
    { id: 'introduction', title: 'Introducción a FastAPI', icon: BookOpen },
    { id: 'installation', title: 'Instalación y configuración', icon: Settings },
    { id: 'structure', title: 'Estructura del proyecto', icon: FileText },
    { id: 'endpoints', title: 'Creación de endpoints', icon: Code },
    { id: 'validation', title: 'Validación y modelos con Pydantic', icon: Code },
    { id: 'database', title: 'Conexión con Base de Datos', icon: Database },
    { id: 'documentation', title: 'Documentación y pruebas', icon: TestTube },
    { id: 'deployment', title: 'Despliegue', icon: Upload },
    { id: 'playground', title: 'API Playground', icon: Play }
  ]

  const copyToClipboard = async (code: string, id: string) => {
    try {
      await navigator.clipboard.writeText(code)
      setCopiedCode(id)
      setTimeout(() => setCopiedCode(null), 2000)
    } catch (err) {
      console.error('Error al copiar código:', err)
    }
  }

  const CodeBlock = ({ code, language = 'python', id }: { code: string; language?: string; id: string }) => (
    <div className="relative">
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
        <code>{code}</code>
      </pre>
      <Button
        variant="outline"
        size="sm"
        className="absolute top-2 right-2"
        onClick={() => copyToClipboard(code, id)}
      >
        {copiedCode === id ? '¡Copiado!' : <Copy className="h-4 w-4" />}
      </Button>
    </div>
  )

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Header */}
      <header className="border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 shadow-sm">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl shadow-lg">
                <BookOpen className="h-8 w-8 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Guía Completa de FastAPI
                </h1>
                <p className="text-muted-foreground mt-1">Aprende a construir APIs modernas y eficientes con Python</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Badge variant="secondary" className="text-sm bg-gradient-to-r from-blue-100 to-purple-100">
                Versión 2025
              </Badge>
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => window.location.href = '/detailed-guide'}
                className="flex items-center gap-2 border-blue-200 hover:bg-blue-50"
              >
                <GraduationCap className="h-4 w-4" />
                Guía Detallada
              </Button>
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => window.location.href = '/practical-example'}
                className="flex items-center gap-2 border-green-200 hover:bg-green-50"
              >
                <Rocket className="h-4 w-4" />
                Ejemplo Práctico
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6">
        <div className="flex gap-6">
          {/* Sidebar Navigation */}
          <nav className="w-64 flex-shrink-0">
            <Card className="sticky top-6 shadow-lg border-blue-100">
              <CardHeader className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-t-lg">
                <CardTitle className="text-lg flex items-center gap-2 text-blue-800">
                  <FileText className="h-5 w-5" />
                  Contenido
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <ScrollArea className="h-[calc(100vh-200px)]">
                  <div className="space-y-1 p-4">
                    {sections.map((section) => {
                      const Icon = section.icon
                      const isActive = activeSection === section.id
                      return (
                        <Button
                          key={section.id}
                          variant={isActive ? "default" : "ghost"}
                          className={`w-full justify-start transition-all duration-200 ${
                            isActive 
                              ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-md' 
                              : 'hover:bg-blue-50 hover:text-blue-700'
                          }`}
                          onClick={() => setActiveSection(section.id)}
                        >
                          <Icon className="mr-2 h-4 w-4" />
                          {section.title}
                        </Button>
                      )
                    })}
                  </div>
                </ScrollArea>
              </CardContent>
            </Card>
          </nav>

          {/* Main Content */}
          <main className="flex-1">
            <div className="max-w-4xl">
              {/* Introduction Section */}
              {activeSection === 'introduction' && (
                <Card className="shadow-lg border-blue-100">
                  <CardHeader className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-t-lg border-b">
                    <CardTitle className="flex items-center gap-2 text-blue-800">
                      <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg">
                        <BookOpen className="h-5 w-5 text-white" />
                      </div>
                      1. Introducción a FastAPI
                    </CardTitle>
                    <CardDescription className="text-blue-600">
                      ¿Qué es FastAPI y por qué deberías usarlo?
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <p className="text-foreground leading-relaxed">
                      FastAPI es un framework web moderno y de alto rendimiento para construir APIs con Python 3.7+ 
                      basado en estándares abiertos. Es conocido por su velocidad, facilidad de uso y excelentes 
                      características para el desarrollo de APIs.
                    </p>

                    <div className="grid md:grid-cols-2 gap-4">
                      <Card className="border-blue-200 hover:shadow-md transition-shadow">
                        <CardHeader className="bg-blue-50">
                          <CardTitle className="text-lg text-blue-800">Ventajas Principales</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <ul className="space-y-2 text-sm">
                            <li className="flex items-center gap-2">
                              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                              Alto rendimiento (comparable a Go y Node.js)
                            </li>
                            <li className="flex items-center gap-2">
                              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                              Tipado estático con Pydantic
                            </li>
                            <li className="flex items-center gap-2">
                              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                              Documentación automática (Swagger UI)
                            </li>
                            <li className="flex items-center gap-2">
                              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                              Soporte para async/await
                            </li>
                            <li className="flex items-center gap-2">
                              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                              Validación de datos automática
                            </li>
                            <li className="flex items-center gap-2">
                              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                              Inyección de dependencias
                            </li>
                          </ul>
                        </CardContent>
                      </Card>

                      <Card className="border-purple-200 hover:shadow-md transition-shadow">
                        <CardHeader className="bg-purple-50">
                          <CardTitle className="text-lg text-purple-800">Comparación con otros frameworks</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-3 text-sm">
                            <div className="flex items-start gap-2">
                              <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                              <div>
                                <strong>vs Flask:</strong> Más rápido, con tipado automático y documentación integrada
                              </div>
                            </div>
                            <div className="flex items-start gap-2">
                              <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                              <div>
                                <strong>vs Django:</strong> Más ligero, enfocado en APIs, mejor rendimiento
                              </div>
                            </div>
                            <div className="flex items-start gap-2">
                              <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                              <div>
                                <strong>vs Starlette:</strong> Más características, mejor documentación
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-3 text-blue-800">Características Técnicas</h3>
                      <div className="grid md:grid-cols-3 gap-4">
                        <Card className="border-blue-200 hover:shadow-lg transition-all duration-300 hover:scale-105">
                          <CardContent className="p-6 text-center">
                            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-3">
                              <Code className="h-6 w-6 text-white" />
                            </div>
                            <p className="font-medium text-blue-800">Basado en estándares</p>
                            <p className="text-sm text-muted-foreground">OpenAPI, JSON Schema</p>
                          </CardContent>
                        </Card>
                        <Card className="border-purple-200 hover:shadow-lg transition-all duration-300 hover:scale-105">
                          <CardContent className="p-6 text-center">
                            <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-3">
                              <TestTube className="h-6 w-6 text-white" />
                            </div>
                            <p className="font-medium text-purple-800">Documentación automática</p>
                            <p className="text-sm text-muted-foreground">Swagger UI, ReDoc</p>
                          </CardContent>
                        </Card>
                        <Card className="border-indigo-200 hover:shadow-lg transition-all duration-300 hover:scale-105">
                          <CardContent className="p-6 text-center">
                            <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-3">
                              <Database className="h-6 w-6 text-white" />
                            </div>
                            <p className="font-medium text-indigo-800">Validación robusta</p>
                            <p className="text-sm text-muted-foreground">Pydantic v2</p>
                          </CardContent>
                        </Card>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Installation Section */}
              {activeSection === 'installation' && (
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Settings className="h-6 w-6" />
                      2. Instalación y configuración
                    </CardTitle>
                    <CardDescription>
                      Cómo instalar FastAPI y configurar tu primer proyecto
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-3">Requisitos Previos</h3>
                      <p className="text-muted-foreground mb-4">
                        Asegúrate de tener Python 3.7+ instalado en tu sistema.
                      </p>
                      <CodeBlock
                        id="check-python"
                        code={`python --version
# o
python3 --version`}
                      />
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-3">Crear Entorno Virtual</h3>
                      <CodeBlock
                        id="virtual-env"
                        code={`# Crear entorno virtual
python -m venv fastapi-env

# Activar entorno virtual
# Windows:
fastapi-env\\Scripts\\activate
# macOS/Linux:
source fastapi-env/bin/activate`}
                      />
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-3">Instalar FastAPI y Uvicorn</h3>
                      <CodeBlock
                        id="install-fastapi"
                        code={`# Instalar FastAPI
pip install fastapi

# Instalar Uvicorn (servidor ASGI)
pip install "uvicorn[standard]"

# Instalar todo junto
pip install "fastapi[all]"`}
                      />
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-3">Primer Servidor FastAPI</h3>
                      <p className="text-muted-foreground mb-4">
                        Crea un archivo llamado <code className="bg-muted px-1 rounded">main.py</code>:
                      </p>
                      <CodeBlock
                        id="first-server"
                        code={`from fastapi import FastAPI

app = FastAPI()

@app.get("/")
def read_root():
    return {"Hello": "World"}

@app.get("/items/{item_id}")
def read_item(item_id: int, q: str | None = None):
    return {"item_id": item_id, "q": q}`}
                      />
                      <p className="text-muted-foreground mt-4 mb-4">
                        Ejecuta el servidor:
                      </p>
                      <CodeBlock
                        id="run-server"
                        code={`uvicorn main:app --reload`}
                      />
                      <p className="text-muted-foreground mt-4">
                        Visita <a href="http://127.0.0.1:8000" className="text-primary underline">http://127.0.0.1:8000</a> 
                        para ver tu primer endpoint, y <a href="http://127.0.0.1:8000/docs" className="text-primary underline">http://127.0.0.1:8000/docs</a> 
                        para la documentación automática.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Project Structure Section */}
              {activeSection === 'structure' && (
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <FileText className="h-6 w-6" />
                      3. Estructura del proyecto
                    </CardTitle>
                    <CardDescription>
                      Cómo organizar un proyecto FastAPI de manera profesional
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <p className="text-foreground leading-relaxed">
                      Una buena estructura de proyecto es fundamental para mantener tu código organizado, 
                      escalable y fácil de mantener. Aquí te mostramos una estructura recomendada para 
                      proyectos FastAPI.
                    </p>

                    <div>
                      <h3 className="text-lg font-semibold mb-3">Estructura de Carpetas Recomendada</h3>
                      <CodeBlock
                        id="project-structure"
                        code={`fastapi_project/
├── app/
│   ├── __init__.py
│   ├── main.py              # Archivo principal de la aplicación
│   ├── core/                # Configuración y utilidades centrales
│   │   ├── __init__.py
│   │   ├── config.py        # Configuración de la aplicación
│   │   └── security.py      # Funciones de seguridad
│   ├── api/                 # Rutas de la API
│   │   ├── __init__.py
│   │   ├── v1/
│   │   │   ├── __init__.py
│   │   │   ├── endpoints.py
│   │   │   └── dependencies.py
│   ├── models/              # Modelos de base de datos
│   │   ├── __init__.py
│   │   └── user.py
│   ├── schemas/             # Esquemas Pydantic
│   │   ├── __init__.py
│   │   └── user.py
│   ├── crud/                # Operaciones CRUD
│   │   ├── __init__.py
│   │   └── user.py
│   ├── db/                  # Configuración de base de datos
│   │   ├── __init__.py
│   │   └── session.py
│   └── utils/               # Utilidades varias
│       ├── __init__.py
│       └── helpers.py
├── tests/                   # Pruebas
│   ├── __init__.py
│   ├── test_api.py
│   └── test_models.py
├── requirements.txt         # Dependencias del proyecto
├── .env                    # Variables de entorno
├── .gitignore              # Archivos a ignorar en Git
└── README.md               # Documentación del proyecto`}
                      />
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-3">Archivos de Configuración</h3>
                      <h4 className="font-medium mb-2">requirements.txt</h4>
                      <CodeBlock
                        id="requirements"
                        code={`fastapi==0.104.1
uvicorn[standard]==0.24.0
sqlalchemy==2.0.23
pydantic==2.5.0
python-multipart==0.0.6
python-jose[cryptography]==3.3.0
passlib[bcrypt]==1.7.4
psycopg2-binary==2.9.9
alembic==1.12.1`}
                      />
                    </div>

                    <div>
                      <h4 className="font-medium mb-2">app/core/config.py</h4>
                      <CodeBlock
                        id="config-py"
                        code={`from pydantic_settings import BaseSettings

class Settings(BaseSettings):
    app_name: str = "FastAPI Project"
    app_version: str = "1.0.0"
    debug: bool = True
    
    # Database
    database_url: str = "sqlite:///./test.db"
    
    # Security
    secret_key: str = "your-secret-key-here"
    algorithm: str = "HS256"
    access_token_expire_minutes: int = 30
    
    class Config:
        env_file = ".env"

settings = Settings()`}
                      />
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-3">Buenas Prácticas</h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        <Card>
                          <CardHeader>
                            <CardTitle className="text-base">Organización</CardTitle>
                          </CardHeader>
                          <CardContent>
                            <ul className="space-y-1 text-sm">
                              <li>• Separa las rutas por versión</li>
                              <li>• Usa módulos para cada entidad</li>
                              <li>• Mantén la configuración centralizada</li>
                              <li>• Documenta cada módulo</li>
                            </ul>
                          </CardContent>
                        </Card>
                        <Card>
                          <CardHeader>
                            <CardTitle className="text-base">Nomenclatura</CardTitle>
                          </CardHeader>
                          <CardContent>
                            <ul className="space-y-1 text-sm">
                              <li>• Usa snake_case para archivos y variables</li>
                              <li>• Usa PascalCase para clases</li>
                              <li>• Sé consistente en todo el proyecto</li>
                              <li>• Nombra los archivos descriptivamente</li>
                            </ul>
                          </CardContent>
                        </Card>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Endpoints Section */}
              {activeSection === 'endpoints' && (
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Code className="h-6 w-6" />
                      4. Creación de endpoints
                    </CardTitle>
                    <CardDescription>
                      Cómo crear rutas HTTP en FastAPI con diferentes métodos
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <p className="text-foreground leading-relaxed">
                      Los endpoints en FastAPI se definen usando decoradores que especifican el método HTTP 
                      y la ruta. FastAPI soporta todos los métodos HTTP estándar: GET, POST, PUT, DELETE, 
                      PATCH, HEAD, OPTIONS.
                    </p>

                    <div>
                      <h3 className="text-lg font-semibold mb-3">Métodos HTTP Básicos</h3>
                      <CodeBlock
                        id="basic-methods"
                        code={`from fastapi import FastAPI, HTTPException
from typing import Optional, List

app = FastAPI()

# GET - Obtener recursos
@app.get("/users")
def get_users():
    return [{"id": 1, "name": "Alice"}, {"id": 2, "name": "Bob"}]

@app.get("/users/{user_id}")
def get_user(user_id: int):
    if user_id == 1:
        return {"id": 1, "name": "Alice"}
    raise HTTPException(status_code=404, detail="User not found")

# POST - Crear nuevos recursos
@app.post("/users")
def create_user(user: dict):
    # En la práctica, aquí guardarías en la base de datos
    return {"id": 3, "name": user["name"], "status": "created"}

# PUT - Actualizar recursos existentes
@app.put("/users/{user_id}")
def update_user(user_id: int, user: dict):
    if user_id == 1:
        return {"id": user_id, "name": user["name"], "status": "updated"}
    raise HTTPException(status_code=404, detail="User not found")

# DELETE - Eliminar recursos
@app.delete("/users/{user_id}")
def delete_user(user_id: int):
    if user_id == 1:
        return {"status": "deleted", "user_id": user_id}
    raise HTTPException(status_code=404, detail="User not found")`}
                      />
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-3">Parámetros de Ruta y Query</h3>
                      <CodeBlock
                        id="parameters"
                        code={`from fastapi import FastAPI, Query, Path
from typing import Optional

app = FastAPI()

# Parámetros de ruta (Path parameters)
@app.get("/items/{item_id}")
def read_item(
    item_id: int = Path(..., description="ID del item a obtener", gt=0),
    q: Optional[str] = Query(None, description="Parámetro de búsqueda opcional"),
    short: bool = Query(False, description="Mostrar versión resumida")
):
    item = {"item_id": item_id}
    if q:
        item.update({"q": q})
    if not short:
        item.update(
            {
                "description": "Este es un item de ejemplo",
                "price": 42.0
            }
        )
    return item

# Múltiples parámetros de ruta
@app.get("/users/{user_id}/posts/{post_id}")
def get_user_post(
    user_id: int = Path(..., gt=0),
    post_id: int = Path(..., gt=0),
    summary: Optional[str] = Query(None, max_length=50)
):
    return {"user_id": user_id, "post_id": post_id, "summary": summary}`}
                      />
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-3">Cuerpo de la Petición (Request Body)</h3>
                      <CodeBlock
                        id="request-body"
                        code={`from fastapi import FastAPI, Body
from pydantic import BaseModel
from typing import Optional

app = FastAPI()

class Item(BaseModel):
    name: str
    description: Optional[str] = None
    price: float
    tax: Optional[float] = None

@app.post("/items/")
def create_item(item: Item):
    # FastAPI valida automáticamente los datos usando Pydantic
    item_dict = item.model_dump()
    if item.tax:
        price_with_tax = item.price + item.tax
        item_dict.update({"price_with_tax": price_with_tax})
    return item_dict

# Usando Body para más control
@app.put("/items/{item_id}")
def update_item(
    item_id: int,
    item: Item,
    user: str = Body(..., embed=True),
    importance: int = Body(..., gt=0, le=5)
):
    results = {"item_id": item_id, "item": item, "user": user, "importance": importance}
    return results`}
                      />
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-3">Respuestas y Códigos de Estado</h3>
                      <CodeBlock
                        id="responses"
                        code={`from fastapi import FastAPI, status
from fastapi.responses import JSONResponse

app = FastAPI()

@app.get("/items/{item_id}", status_code=status.HTTP_200_OK)
def read_item(item_id: int):
    if item_id == 42:
        return {"item_id": item_id, "name": "La respuesta a todo"}
    return {"item_id": item_id, "name": "Item normal"}

# Respuestas personalizadas
@app.post("/create/", status_code=status.HTTP_201_CREATED)
def create_resource():
    return {"message": "Recurso creado exitosamente"}

# Múltiples respuestas posibles
@app.get("/maybe-exists/{item_id}")
def maybe_exists(item_id: int):
    if item_id < 0:
        return JSONResponse(
            status_code=status.HTTP_400_BAD_REQUEST,
            content={"message": "ID no puede ser negativo"}
        )
    if item_id == 999:
        return JSONResponse(
            status_code=status.HTTP_404_NOT_FOUND,
            content={"message": "Item no encontrado"}
        )
    return {"item_id": item_id, "exists": True}`}
                      />
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Validation Section */}
              {activeSection === 'validation' && (
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Code className="h-6 w-6" />
                      5. Validación y modelos con Pydantic
                    </CardTitle>
                    <CardDescription>
                      Cómo usar Pydantic para validar datos y generar documentación automática
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <p className="text-foreground leading-relaxed">
                      Pydantic es una librería de validación de datos que usa type hints para validar y 
                      serializar datos. FastAPI integra Pydantic para proporcionar validación automática 
                      de datos de entrada y salida.
                    </p>

                    <div>
                      <h3 className="text-lg font-semibold mb-3">Modelos Básicos con Pydantic</h3>
                      <CodeBlock
                        id="basic-models"
                        code={`from pydantic import BaseModel, Field, EmailStr
from typing import Optional, List
from datetime import datetime

class UserBase(BaseModel):
    username: str = Field(..., min_length=3, max_length=50)
    email: EmailStr
    full_name: Optional[str] = Field(None, max_length=100)
    age: Optional[int] = Field(None, ge=18, le=120)

class UserCreate(UserBase):
    password: str = Field(..., min_length=8)

class UserUpdate(BaseModel):
    username: Optional[str] = Field(None, min_length=3, max_length=50)
    email: Optional[EmailStr] = None
    full_name: Optional[str] = Field(None, max_length=100)
    age: Optional[int] = Field(None, ge=18, le=120)

class User(UserBase):
    id: int
    is_active: bool = True
    created_at: datetime
    
    class Config:
        from_attributes = True

# Uso en FastAPI
@app.post("/users/", response_model=User)
def create_user(user: UserCreate):
    # La validación ocurre automáticamente
    # user.password estará disponible aquí
    # pero no se incluirá en la respuesta
    return {"id": 1, **user.model_dump(), "is_active": True, "created_at": datetime.now()}`}
                      />
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-3">Validación Avanzada</h3>
                      <CodeBlock
                        id="advanced-validation"
                        code={`from pydantic import BaseModel, Field, validator
from typing import List
import re

class Product(BaseModel):
    name: str = Field(..., min_length=2, max_length=100)
    price: float = Field(..., gt=0)
    tags: List[str] = Field(default_factory=list)
    description: Optional[str] = None
    sku: str
    
    @validator('sku')
    def validate_sku(cls, v):
        if not re.match(r'^[A-Z]{2}-\\d{4}$', v):
            raise ValueError('SKU debe tener formato XX-1234')
        return v.upper()
    
    @validator('tags')
    def validate_tags(cls, v):
        if len(v) > 5:
            raise ValueError('Máximo 5 tags permitidos')
        return [tag.lower() for tag in v]
    
    @validator('name')
    def validate_name(cls, v):
        if 'oficial' in v.lower():
            raise ValueError('El nombre no puede contener "oficial"')
        return v.title()

# Uso con validación personalizada
@app.post("/products/")
def create_product(product: Product):
    return {"message": "Producto creado", "product": product}`}
                      />
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-3">Modelos Anidados y Relaciones</h3>
                      <CodeBlock
                        id="nested-models"
                        code={`from pydantic import BaseModel
from typing import List, Optional

class Address(BaseModel):
    street: str
    city: str
    state: str
    zip_code: str
    country: str = "USA"

class Company(BaseModel):
    name: str
    address: Address
    employees: List[str] = []

class User(BaseModel):
    id: int
    name: str
    email: str
    company: Optional[Company] = None
    addresses: List[Address] = []

# Ejemplo de uso
@app.post("/users/")
def create_user(user: User):
    # FastAPI validará toda la estructura anidada
    return {"message": "Usuario creado", "user": user}

# Response models anidados
class UserResponse(BaseModel):
    id: int
    name: str
    company: Optional[Company] = None
    
    class Config:
        from_attributes = True

@app.get("/users/{user_id}", response_model=UserResponse)
def get_user(user_id: int):
    # Solo se devolverán los campos definidos en UserResponse
    return {"id": user_id, "name": "John Doe", "company": None}`}
                      />
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-3">Validación de Listas y Enums</h3>
                      <CodeBlock
                        id="list-enum-validation"
                        code={`from pydantic import BaseModel, Field
from typing import List, Literal
from enum import Enum

class UserRole(str, Enum):
    ADMIN = "admin"
    MODERATOR = "moderator"
    USER = "user"

class PostStatus(str, Enum):
    DRAFT = "draft"
    PUBLISHED = "published"
    ARCHIVED = "archived"

class Post(BaseModel):
    title: str = Field(..., min_length=5, max_length=200)
    content: str = Field(..., min_length=10)
    status: PostStatus = PostStatus.DRAFT
    tags: List[str] = Field(default_factory=list, max_items=10)
    priority: Literal["low", "medium", "high"] = "medium"
    
    @validator('tags')
    def validate_tags(cls, v):
        return [tag.strip().lower() for tag in v if tag.strip()]

class User(BaseModel):
    username: str
    role: UserRole = UserRole.USER
    posts: List[Post] = Field(default_factory=list)

# Uso con enums y listas
@app.post("/posts/")
def create_post(post: Post):
    return {"message": "Post creado", "post": post}

@app.post("/users/")
def create_user(user: User):
    return {"message": "Usuario creado", "user": user}`}
                      />
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Database Section */}
              {activeSection === 'database' && (
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Database className="h-6 w-6" />
                      6. Conexión con Base de Datos
                    </CardTitle>
                    <CardDescription>
                      Integración con SQLAlchemy y operaciones CRUD asíncronas
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <p className="text-foreground leading-relaxed">
                      FastAPI se integra perfectamente con bases de datos usando SQLAlchemy. 
                      Recomendamos usar el modo asíncrono con asyncpg para PostgreSQL o 
                      aiosqlite para SQLite para mejor rendimiento.
                    </p>

                    <div>
                      <h3 className="text-lg font-semibold mb-3">Configuración de Base de Datos</h3>
                      <CodeBlock
                        id="db-config"
                        code={`# app/core/config.py
from pydantic_settings import BaseSettings

class Settings(BaseSettings):
    database_url: str = "sqlite+aiosqlite:///./test.db"
    # Para PostgreSQL:
    # database_url: str = "postgresql+asyncpg://user:password@localhost/dbname"
    
    class Config:
        env_file = ".env"

settings = Settings()

# app/db/session.py
from sqlalchemy.ext.asyncio import AsyncSession, create_async_engine
from sqlalchemy.orm import sessionmaker
from app.core.config import settings

engine = create_async_engine(settings.database_url, echo=True)
AsyncSessionLocal = sessionmaker(
    engine, class_=AsyncSession, expire_on_commit=False
)

# Dependencia para obtener la sesión de base de datos
async def get_db() -> AsyncSession:
    async with AsyncSessionLocal() as session:
        try:
            yield session
        finally:
            await session.close()`}
                      />
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-3">Modelos de Base de Datos</h3>
                      <CodeBlock
                        id="db-models"
                        code={`# app/models/base.py
from sqlalchemy.ext.asyncio import AsyncAttrs
from sqlalchemy.orm import DeclarativeBase

class Base(AsyncAttrs, DeclarativeBase):
    pass

# app/models/user.py
from sqlalchemy import Column, Integer, String, Boolean, DateTime, Text
from sqlalchemy.sql import func
from app.models.base import Base

class User(Base):
    __tablename__ = "users"
    
    id = Column(Integer, primary_key=True, index=True)
    username = Column(String(50), unique=True, index=True, nullable=False)
    email = Column(String(100), unique=True, index=True, nullable=False)
    full_name = Column(String(100))
    hashed_password = Column(String(255), nullable=False)
    is_active = Column(Boolean, default=True)
    created_at = Column(DateTime(timezone=True), server_default=func.now())
    updated_at = Column(DateTime(timezone=True), onupdate=func.now())

# app/models/post.py
from sqlalchemy import Column, Integer, String, Text, Boolean, DateTime, ForeignKey
from sqlalchemy.sql import func
from sqlalchemy.orm import relationship
from app.models.base import Base

class Post(Base):
    __tablename__ = "posts"
    
    id = Column(Integer, primary_key=True, index=True)
    title = Column(String(200), nullable=False)
    content = Column(Text)
    is_published = Column(Boolean, default=False)
    created_at = Column(DateTime(timezone=True), server_default=func.now())
    updated_at = Column(DateTime(timezone=True), onupdate=func.now())
    
    # Relación con User
    owner_id = Column(Integer, ForeignKey("users.id"))
    owner = relationship("User", back_populates="posts")`}
                      />
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-3">Operaciones CRUD</h3>
                      <CodeBlock
                        id="crud-operations"
                        code={`# app/crud/base.py
from typing import Generic, TypeVar, Type, Optional, List
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy.future import select

ModelType = TypeVar("ModelType")

class CRUDBase(Generic[ModelType]):
    def __init__(self, model: Type[ModelType]):
        self.model = model

    async def get(self, db: AsyncSession, id: int) -> Optional[ModelType]:
        result = await db.execute(select(self.model).where(self.model.id == id))
        return result.scalar_one_or_none()

    async def get_multi(
        self, db: AsyncSession, *, skip: int = 0, limit: int = 100
    ) -> List[ModelType]:
        result = await db.execute(
            select(self.model).offset(skip).limit(limit)
        )
        return result.scalars().all()

    async def create(self, db: AsyncSession, *, obj_in: dict) -> ModelType:
        obj = self.model(**obj_in)
        db.add(obj)
        await db.commit()
        await db.refresh(obj)
        return obj

    async def update(
        self, db: AsyncSession, *, db_obj: ModelType, obj_in: dict
    ) -> ModelType:
        for field, value in obj_in.items():
            setattr(db_obj, field, value)
        await db.commit()
        await db.refresh(db_obj)
        return db_obj

    async def delete(self, db: AsyncSession, *, id: int) -> Optional[ModelType]:
        obj = await self.get(db, id=id)
        if obj:
            await db.delete(obj)
            await db.commit()
        return obj

# app/crud/user.py
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy.future import select
from app.models.user import User
from app.schemas.user import UserCreate, UserUpdate
from app.crud.base import CRUDBase
from app.core.security import get_password_hash

class CRUDUser(CRUDBase[User]):
    async def get_by_username(self, db: AsyncSession, username: str) -> Optional[User]:
        result = await db.execute(select(User).where(User.username == username))
        return result.scalar_one_or_none()

    async def get_by_email(self, db: AsyncSession, email: str) -> Optional[User]:
        result = await db.execute(select(User).where(User.email == email))
        return result.scalar_one_or_none()

    async def create(self, db: AsyncSession, *, obj_in: UserCreate) -> User:
        hashed_password = get_password_hash(obj_in.password)
        db_obj = User(
            username=obj_in.username,
            email=obj_in.email,
            full_name=obj_in.full_name,
            hashed_password=hashed_password,
        )
        db.add(db_obj)
        await db.commit()
        await db.refresh(db_obj)
        return db_obj

user = CRUDUser(User)`}
                      />
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-3">Endpoints con Base de Datos</h3>
                      <CodeBlock
                        id="db-endpoints"
                        code={`# app/api/v1/endpoints/users.py
from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.ext.asyncio import AsyncSession
from typing import List

from app.db.session import get_db
from app.schemas.user import User, UserCreate, UserUpdate
from app.crud.user import user

router = APIRouter()

@router.post("/", response_model=User)
async def create_user(
    *,
    db: AsyncSession = Depends(get_db),
    user_in: UserCreate
):
    # Verificar si el usuario ya existe
    db_user = await user.get_by_email(db, email=user_in.email)
    if db_user:
        raise HTTPException(
            status_code=400,
            detail="Email ya registrado"
        )
    return await user.create(db, obj_in=user_in.model_dump())

@router.get("/", response_model=List[User])
async def read_users(
    db: AsyncSession = Depends(get_db),
    skip: int = 0,
    limit: int = 100
):
    users = await user.get_multi(db, skip=skip, limit=limit)
    return users

@router.get("/{user_id}", response_model=User)
async def read_user(
    user_id: int,
    db: AsyncSession = Depends(get_db)
):
    db_user = await user.get(db, id=user_id)
    if not db_user:
        raise HTTPException(status_code=404, detail="Usuario no encontrado")
    return db_user

@router.put("/{user_id}", response_model=User)
async def update_user(
    *,
    db: AsyncSession = Depends(get_db),
    user_id: int,
    user_in: UserUpdate
):
    db_user = await user.get(db, id=user_id)
    if not db_user:
        raise HTTPException(status_code=404, detail="Usuario no encontrado")
    return await user.update(db, db_obj=db_user, obj_in=user_in.model_dump(exclude_unset=True))

@router.delete("/{user_id}")
async def delete_user(
    user_id: int,
    db: AsyncSession = Depends(get_db)
):
    db_user = await user.delete(db, id=user_id)
    if not db_user:
        raise HTTPException(status_code=404, detail="Usuario no encontrado")
    return {"message": "Usuario eliminado exitosamente"}`}
                      />
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Documentation Section */}
              {activeSection === 'documentation' && (
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <TestTube className="h-6 w-6" />
                      7. Documentación y pruebas
                    </CardTitle>
                    <CardDescription>
                      Documentación automática y estrategias de testing en FastAPI
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <p className="text-foreground leading-relaxed">
                      FastAPI genera documentación automática basada en tus endpoints y modelos Pydantic. 
                      Además, proporciona excelentes herramientas para testing de tus APIs.
                    </p>

                    <div>
                      <h3 className="text-lg font-semibold mb-3">Documentación Automática</h3>
                      <p className="text-muted-foreground mb-4">
                        FastAPI genera automáticamente dos interfaces de documentación:
                      </p>
                      <div className="grid md:grid-cols-2 gap-4 mb-4">
                        <Card>
                          <CardHeader>
                            <CardTitle className="text-base">Swagger UI</CardTitle>
                          </CardHeader>
                          <CardContent>
                            <p className="text-sm mb-2">
                              Interactiva, permite probar endpoints directamente desde el navegador.
                            </p>
                            <p className="text-xs text-muted-foreground">
                              Disponible en: <code>/docs</code>
                            </p>
                          </CardContent>
                        </Card>
                        <Card>
                          <CardHeader>
                            <CardTitle className="text-base">ReDoc</CardTitle>
                          </CardHeader>
                          <CardContent>
                            <p className="text-sm mb-2">
                              Documentación limpia, ideal para referencia y documentación pública.
                            </p>
                            <p className="text-xs text-muted-foreground">
                              Disponible en: <code>/redoc</code>
                            </p>
                          </CardContent>
                        </Card>
                      </div>
                      <CodeBlock
                        id="custom-docs"
                        code={`from fastapi import FastAPI
from fastapi.openapi.utils import get_openapi

app = FastAPI(
    title="Mi API FastAPI",
    description="Esta es una API de ejemplo",
    version="1.0.0",
    docs_url="/docs",  # URL personalizable para Swagger UI
    redoc_url="/redoc"  # URL personalizable para ReDoc
)

# Personalizar la documentación OpenAPI
def custom_openapi():
    if app.openapi_schema:
        return app.openapi_schema
    
    openapi_schema = get_openapi(
        title="Mi API FastAPI",
        version="1.0.0",
        description="API de ejemplo con documentación personalizada",
        routes=app.routes,
    )
    
    # Personalizar información adicional
    openapi_schema["info"]["x-logo"] = {
        "url": "https://fastapi.tiangolo.com/img/logo-margin/logo-teal.png"
    }
    
    # Agregar servidores
    openapi_schema["servers"] = [
        {
            "url": "https://api.example.com/v1",
            "description": "Producción"
        },
        {
            "url": "http://localhost:8000",
            "description": "Desarrollo"
        }
    ]
    
    app.openapi_schema = openapi_schema
    return app.openapi_schema

app.openapi = custom_openapi`}
                      />
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-3">Testing con pytest</h3>
                      <CodeBlock
                        id="pytest-setup"
                        code={`# requirements.txt (agregar dependencias de testing)
pytest==7.4.3
pytest-asyncio==0.21.1
httpx==0.25.2

# tests/conftest.py
import pytest
from fastapi.testclient import TestClient
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from sqlalchemy.pool import StaticPool

from app.main import app
from app.db.base import Base
from app.db.session import get_db

# Base de datos de prueba en memoria
SQLALCHEMY_DATABASE_URL = "sqlite:///:memory:"

engine = create_engine(
    SQLALCHEMY_DATABASE_URL,
    connect_args={"check_same_thread": False},
    poolclass=StaticPool,
)
TestingSessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

def override_get_db():
    try:
        db = TestingSessionLocal()
        yield db
    finally:
        db.close()

app.dependency_overrides[get_db] = override_get_db

@pytest.fixture
def client():
    Base.metadata.create_all(bind=engine)
    with TestClient(app) as c:
        yield c
    Base.metadata.drop_all(bind=engine)

@pytest.fixture
def test_user():
    return {
        "username": "testuser",
        "email": "test@example.com",
        "full_name": "Test User",
        "password": "testpassword123"
    }`}
                      />
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-3">Tests de API</h3>
                      <CodeBlock
                        id="api-tests"
                        code={`# tests/test_api.py
import pytest
from fastapi.testclient import TestClient

def test_read_main(client: TestClient):
    response = client.get("/")
    assert response.status_code == 200
    assert response.json() == {"Hello": "World"}

def test_create_user(client: TestClient, test_user):
    response = client.post("/users/", json=test_user)
    assert response.status_code == 200
    data = response.json()
    assert data["username"] == test_user["username"]
    assert data["email"] == test_user["email"]
    assert "id" in data
    assert data["is_active"] is True

def test_read_user(client: TestClient, test_user):
    # Primero crear un usuario
    create_response = client.post("/users/", json=test_user)
    user_id = create_response.json()["id"]
    
    # Luego leer el usuario
    response = client.get(f"/users/{user_id}")
    assert response.status_code == 200
    data = response.json()
    assert data["username"] == test_user["username"]

def test_read_users(client: TestClient, test_user):
    # Crear algunos usuarios
    client.post("/users/", json=test_user)
    client.post("/users/", json={
        **test_user,
        "username": "testuser2",
        "email": "test2@example.com"
    })
    
    response = client.get("/users/")
    assert response.status_code == 200
    data = response.json()
    assert len(data) >= 2

def test_update_user(client: TestClient, test_user):
    # Crear usuario
    create_response = client.post("/users/", json=test_user)
    user_id = create_response.json()["id"]
    
    # Actualizar usuario
    update_data = {"full_name": "Updated Name"}
    response = client.put(f"/users/{user_id}", json=update_data)
    assert response.status_code == 200
    data = response.json()
    assert data["full_name"] == "Updated Name"

def test_delete_user(client: TestClient, test_user):
    # Crear usuario
    create_response = client.post("/users/", json=test_user)
    user_id = create_response.json()["id"]
    
    # Eliminar usuario
    response = client.delete(f"/users/{user_id}")
    assert response.status_code == 200
    
    # Verificar que el usuario ya no existe
    get_response = client.get(f"/users/{user_id}")
    assert get_response.status_code == 404`}
                      />
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-3">Testing Asíncrono</h3>
                      <CodeBlock
                        id="async-tests"
                        code={`# tests/test_async.py
import pytest
from httpx import AsyncClient
from app.main import app

@pytest.mark.asyncio
async def test_async_create_user():
    async with AsyncClient(app=app, base_url="http://test") as ac:
        response = await ac.post(
            "/users/",
            json={
                "username": "asyncuser",
                "email": "async@example.com",
                "full_name": "Async User",
                "password": "asyncpassword123"
            }
        )
    assert response.status_code == 200
    data = response.json()
    assert data["username"] == "asyncuser"

@pytest.mark.asyncio
async def test_async_read_users():
    async with AsyncClient(app=app, base_url="http://test") as ac:
        response = await ac.get("/users/")
    assert response.status_code == 200
    assert isinstance(response.json(), list)

# Tests de rendimiento
@pytest.mark.asyncio
async def test_performance():
    import time
    start_time = time.time()
    
    async with AsyncClient(app=app, base_url="http://test") as ac:
        # Realizar múltiples peticiones concurrentes
        tasks = []
        for i in range(10):
            task = ac.get("/users/")
            tasks.append(task)
        
        responses = await asyncio.gather(*tasks)
        
        for response in responses:
            assert response.status_code == 200
    
    end_time = time.time()
    assert end_time - start_time < 5.0  # Debe completarse en menos de 5 segundos`}
                      />
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Deployment Section */}
              {activeSection === 'deployment' && (
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Upload className="h-6 w-6" />
                      8. Despliegue
                    </CardTitle>
                    <CardDescription>
                      Opciones de despliegue y mejores prácticas para producción
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <p className="text-foreground leading-relaxed">
                      Desplegar una aplicación FastAPI en producción requiere considerar varios 
                      factores como rendimiento, seguridad, escalabilidad y mantenibilidad.
                    </p>

                    <div>
                      <h3 className="text-lg font-semibold mb-3">Opciones de Despliegue</h3>
                      <div className="grid md:grid-cols-2 gap-4 mb-6">
                        <Card>
                          <CardHeader>
                            <CardTitle className="text-base">Docker + Uvicorn</CardTitle>
                          </CardHeader>
                          <CardContent>
                            <p className="text-sm mb-2">
                              La opción más común y flexible. Contenedoriza tu aplicación 
                              para consistencia entre entornos.
                            </p>
                            <ul className="text-xs space-y-1">
                              <li>• Portabilidad entre sistemas</li>
                              <li>• Fácil escalado horizontal</li>
                              <li>• Aislamiento de dependencias</li>
                            </ul>
                          </CardContent>
                        </Card>
                        <Card>
                          <CardHeader>
                            <CardTitle className="text-base">Cloud Platforms</CardTitle>
                          </CardHeader>
                          <CardContent>
                            <p className="text-sm mb-2">
                              Plataformas como Render, Railway, Heroku simplifican el despliegue.
                            </p>
                            <ul className="text-xs space-y-1">
                              <li>• Despliegue con Git push</li>
                              <li>• Escalado automático</li>
                              <li>• Monitoreo integrado</li>
                            </ul>
                          </CardContent>
                        </Card>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-3">Dockerfile para FastAPI</h3>
                      <CodeBlock
                        id="dockerfile"
                        code={`# Dockerfile multi-stage para optimización
FROM python:3.11-slim as builder

# Instalar dependencias del sistema
RUN apt-get update && apt-get install -y \\
    gcc \\
    && rm -rf /var/lib/apt/lists/*

# Establecer directorio de trabajo
WORKDIR /app

# Copiar requirements primero para caché de Docker
COPY requirements.txt .

# Instalar dependencias de Python
RUN pip install --no-cache-dir -r requirements.txt

# Etapa de producción
FROM python:3.11-slim

# Instalar dependencias del sistema necesarias
RUN apt-get update && apt-get install -y \\
    curl \\
    && rm -rf /var/lib/apt/lists/*

# Crear usuario no root
RUN useradd --create-home --shell /bin/bash app
WORKDIR /home/app

# Copiar dependencias de la etapa builder
COPY --from=builder /usr/local/lib/python3.11/site-packages /usr/local/lib/python3.11/site-packages
COPY --from=builder /usr/local/bin /usr/local/bin

# Copiar aplicación
COPY --chown=app:app . .

# Cambiar a usuario no root
USER app

# Exponer puerto
EXPOSE 8000

# Comando para ejecutar la aplicación
CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "8000"]`}
                      />
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-3">docker-compose.yml</h3>
                      <CodeBlock
                        id="docker-compose"
                        code={`version: '3.8'

services:
  app:
    build: .
    ports:
      - "8000:8000"
    environment:
      - DATABASE_URL=postgresql+asyncpg://fastapi_user:fastapi_password@db:5432/fastapi_db
      - SECRET_KEY=your-secret-key-change-in-production
    depends_on:
      - db
    volumes:
      - ./app:/home/app/app
    command: uvicorn app.main:app --host 0.0.0.0 --port 8000 --reload

  db:
    image: postgres:15
    environment:
      - POSTGRES_USER=fastapi_user
      - POSTGRES_PASSWORD=fastapi_password
      - POSTGRES_DB=fastapi_db
    volumes:
      - postgres_data:/var/lib/postgresql/data
    ports:
      - "5432:5432"

  redis:
    image: redis:7-alpine
    ports:
      - "6379:6379"

volumes:
  postgres_data:`}
                      />
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-3">Configuración de Producción</h3>
                      <CodeBlock
                        id="production-config"
                        code={`# app/core/config.py
from pydantic_settings import BaseSettings

class Settings(BaseSettings):
    # Configuración de la aplicación
    app_name: str = "FastAPI Production"
    debug: bool = False
    version: str = "1.0.0"
    
    # Base de datos
    database_url: str
    
    # Seguridad
    secret_key: str
    algorithm: str = "HS256"
    access_token_expire_minutes: int = 30
    
    # CORS
    backend_cors_origins: list[str] = ["http://localhost:3000", "https://yourdomain.com"]
    
    # Logging
    log_level: str = "INFO"
    
    # Performance
    workers: int = 4
    limit_concurrency: int = 1000
    timeout_keep_alive: int = 5
    
    class Config:
        env_file = ".env.production"

settings = Settings()

# app/main.py
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.middleware.gzip import GZipMiddleware
from app.core.config import settings

app = FastAPI(
    title=settings.app_name,
    version=settings.version,
    debug=settings.debug
)

# Middleware CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.backend_cors_origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Middleware GZip
app.add_middleware(GZipMiddleware, minimum_size=1000)`}
                      />
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-3">Mejores Prácticas de Producción</h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        <Card>
                          <CardHeader>
                            <CardTitle className="text-base">Seguridad</CardTitle>
                          </CardHeader>
                          <CardContent>
                            <ul className="text-sm space-y-1">
                              <li>• Usar HTTPS siempre</li>
                              <li>• Variables de entorno para secrets</li>
                              <li>• Validar y sanitizar entradas</li>
                              <li>• Implementar rate limiting</li>
                              <li>• Usar usuarios no root</li>
                            </ul>
                          </CardContent>
                        </Card>
                        <Card>
                          <CardHeader>
                            <CardTitle className="text-base">Rendimiento</CardTitle>
                          </CardHeader>
                          <CardContent>
                            <ul className="text-sm space-y-1">
                              <li>• Usar múltiples workers</li>
                              <li>• Implementar caché (Redis)</li>
                              <li>• Optimizar consultas a BD</li>
                              <li>• Usar connection pooling</li>
                              <li>• Monitorear métricas</li>
                            </ul>
                          </CardContent>
                        </Card>
                        <Card>
                          <CardHeader>
                            <CardTitle className="text-base">Monitoreo</CardTitle>
                          </CardHeader>
                          <CardContent>
                            <ul className="text-sm space-y-1">
                              <li>• Logs estructurados</li>
                              <li>• Métricas con Prometheus</li>
                              <li>• Health checks</li>
                              <li>• Alertas configuradas</li>
                              <li>• Backup automático</li>
                            </ul>
                          </CardContent>
                        </Card>
                        <Card>
                          <CardHeader>
                            <CardTitle className="text-base">Escalabilidad</CardTitle>
                          </CardHeader>
                          <CardContent>
                            <ul className="text-sm space-y-1">
                              <li>• Diseño stateless</li>
                              <li>• Balanceo de carga</li>
                              <li>• Escalado horizontal</li>
                              <li>• Base de datos escalable</li>
                              <li>• CDN para assets</li>
                            </ul>
                          </CardContent>
                        </Card>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-3">Ejemplo de Despliegue en Render</h3>
                      <CodeBlock
                        id="render-deploy"
                        code={`# render.yaml
services:
  - type: web
    name: fastapi-app
    env: python
    buildCommand: pip install -r requirements.txt
    startCommand: uvicorn app.main:app --host 0.0.0.0 --port $PORT
    envVars:
      - key: DATABASE_URL
        fromDatabase:
          name: fastapi-db
          property: connectionString
      - key: SECRET_KEY
        generateValue: true
      - key: DEBUG
        value: false

databases:
  - name: fastapi-db
    databaseName: fastapi
    user: fastapi_user

# .env
DATABASE_URL=postgresql://fastapi_user:password@localhost:5432/fastapi_db
SECRET_KEY=your-secret-key-here
DEBUG=false`}
                      />
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* API Playground Section */}
              {activeSection === 'playground' && (
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Play className="h-6 w-6" />
                      API Playground
                    </CardTitle>
                    <CardDescription>
                      Prueba endpoints de FastAPI directamente desde aquí
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <Card>
                        <CardHeader>
                          <CardTitle className="text-base">Request</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                          <div>
                            <Label htmlFor="method">Método HTTP</Label>
                            <Select value={apiRequest.method} onValueChange={(value) => setApiRequest({...apiRequest, method: value})}>
                              <SelectTrigger>
                                <SelectValue />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="GET">GET</SelectItem>
                                <SelectItem value="POST">POST</SelectItem>
                                <SelectItem value="PUT">PUT</SelectItem>
                                <SelectItem value="DELETE">DELETE</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          
                          <div>
                            <Label htmlFor="endpoint">Endpoint</Label>
                            <Input
                              id="endpoint"
                              placeholder="/items/1"
                              value={apiRequest.endpoint}
                              onChange={(e) => setApiRequest({...apiRequest, endpoint: e.target.value})}
                            />
                          </div>
                          
                          {(apiRequest.method === 'POST' || apiRequest.method === 'PUT') && (
                            <div>
                              <Label htmlFor="body">Body (JSON)</Label>
                              <Textarea
                                id="body"
                                placeholder='{"name": "example", "price": 10.99}'
                                value={apiRequest.body}
                                onChange={(e) => setApiRequest({...apiRequest, body: e.target.value})}
                                rows={6}
                              />
                            </div>
                          )}
                          
                          <Button onClick={() => {
                            // Simulate API call
                            setApiResponse(JSON.stringify({
                              status: 200,
                              data: {
                                message: "Respuesta simulada",
                                method: apiRequest.method,
                                endpoint: apiRequest.endpoint,
                                body: apiRequest.body ? JSON.parse(apiRequest.body) : null,
                                timestamp: new Date().toISOString()
                              }
                            }, null, 2))
                          }} className="w-full">
                            Enviar Request
                          </Button>
                        </CardContent>
                      </Card>
                      
                      <Card>
                        <CardHeader>
                          <CardTitle className="text-base">Response</CardTitle>
                        </CardHeader>
                        <CardContent>
                          {apiResponse ? (
                            <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
                              <code>{apiResponse}</code>
                            </pre>
                          ) : (
                            <p className="text-muted-foreground text-center py-8">
                              Envía una request para ver la respuesta aquí
                            </p>
                          )}
                        </CardContent>
                      </Card>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold mb-3">Ejemplos de Endpoints</h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        <Card>
                          <CardHeader>
                            <CardTitle className="text-base">GET /users</CardTitle>
                          </CardHeader>
                          <CardContent>
                            <p className="text-sm text-muted-foreground mb-2">
                              Obtener lista de usuarios
                            </p>
                            <Button 
                              variant="outline" 
                              size="sm"
                              onClick={() => {
                                setApiRequest({method: 'GET', endpoint: '/users', body: ''})
                                setApiResponse(JSON.stringify({
                                  status: 200,
                                  data: [
                                    {id: 1, username: "alice", email: "alice@example.com"},
                                    {id: 2, username: "bob", email: "bob@example.com"}
                                  ]
                                }, null, 2))
                              }}
                            >
                              Probar
                            </Button>
                          </CardContent>
                        </Card>
                        
                        <Card>
                          <CardHeader>
                            <CardTitle className="text-base">POST /users</CardTitle>
                          </CardHeader>
                          <CardContent>
                            <p className="text-sm text-muted-foreground mb-2">
                              Crear nuevo usuario
                            </p>
                            <Button 
                              variant="outline" 
                              size="sm"
                              onClick={() => {
                                setApiRequest({
                                  method: 'POST', 
                                  endpoint: '/users', 
                                  body: '{"username": "newuser", "email": "new@example.com", "password": "secret123"}'
                                })
                                setApiResponse(JSON.stringify({
                                  status: 201,
                                  data: {id: 3, username: "newuser", email: "new@example.com"}
                                }, null, 2))
                              }}
                            >
                              Probar
                            </Button>
                          </CardContent>
                        </Card>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>
          </main>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t bg-gradient-to-r from-blue-50 to-purple-50 mt-12">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground">
              © 2025 Guía FastAPI. Desarrollado con ❤️ para la comunidad Python.
            </p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <Button 
                variant="ghost" 
                size="sm"
                onClick={() => window.location.href = '/detailed-guide'}
                className="flex items-center gap-2 hover:bg-blue-100"
              >
                <GraduationCap className="h-4 w-4" />
                Guía Detallada
              </Button>
              <Button 
                variant="ghost" 
                size="sm"
                onClick={() => window.location.href = '/practical-example'}
                className="flex items-center gap-2 hover:bg-green-100"
              >
                <Rocket className="h-4 w-4" />
                Ejemplo Práctico
              </Button>
              <Button variant="ghost" size="sm" className="flex items-center gap-2 hover:bg-blue-100">
                <ExternalLink className="h-4 w-4 mr-2" />
                GitHub
              </Button>
              <Button variant="ghost" size="sm" className="flex items-center gap-2 hover:bg-blue-100">
                <BookOpen className="h-4 w-4 mr-2" />
                Documentación
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}