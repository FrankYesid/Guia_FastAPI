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
import { Progress } from '@/components/ui/progress'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { 
  BookOpen, 
  Code, 
  Database, 
  FileText, 
  Play, 
  Settings, 
  TestTube, 
  Upload, 
  Copy, 
  ExternalLink,
  ArrowRight,
  ArrowLeft,
  CheckCircle,
  AlertCircle,
  Lightbulb,
  Target,
  Rocket,
  Zap,
  Shield,
  Globe,
  Server,
  Cpu,
  Layers,
  Wrench,
  GraduationCap
} from 'lucide-react'

export default function DetailedFastAPIGuide() {
  const [currentStep, setCurrentStep] = useState(0)
  const [copiedCode, setCopiedCode] = useState<string | null>(null)
  const [completedSteps, setCompletedSteps] = useState<number[]>([])

  const detailedSteps = [
    {
      id: 'preparation',
      title: 'Paso 0: Preparación del Entorno',
      icon: GraduationCap,
      description: 'Configuración inicial para comenzar con FastAPI',
      difficulty: 'Fácil',
      timeEstimate: '15 minutos',
      objectives: [
        'Entender qué es FastAPI y sus ventajas',
        'Configurar el entorno de desarrollo',
        'Instalar las dependencias necesarias'
      ],
      detailedExplanation: `
Antes de sumergirnos en FastAPI, es fundamental preparar nuestro entorno de desarrollo correctamente. 
FastAPI es un framework web moderno y de alto rendimiento para construir APIs con Python 3.7+.

¿Por qué FastAPI?
• Rendimiento excepcional (comparable a Go y Node.js)
• Tipado estático con Pydantic para validación automática
• Documentación automática con Swagger UI y ReDoc
• Soporte nativo para async/await
• Inyección de dependencias integrada
• Basado en estándares abiertos (OpenAPI, JSON Schema)

En este paso inicial, configuraremos todo lo necesario para que puedas comenzar a desarrollar 
con FastAPI de manera profesional y eficiente.
      `,
      prerequisites: [
        'Python 3.7 o superior instalado',
        'Conocimientos básicos de Python',
        'Familiaridad con conceptos de APIs REST'
      ],
      steps: [
        {
          title: 'Verificar instalación de Python',
          content: `Primero, asegúrate de tener Python instalado en tu sistema. Abre tu terminal y ejecuta:`,
          code: `python --version
# o si usas Python 3
python3 --version`,
          explanation: `Este comando te mostrará la versión de Python instalada. FastAPI requiere Python 3.7 o superior. 
Si no tienes Python instalado, descárgalo desde python.org y sigue las instrucciones de instalación.`,
          tip: 'Recomiendo usar Python 3.9 o superior para mejores características y rendimiento.'
        },
        {
          title: 'Crear entorno virtual',
          content: `Los entornos virtuales son esenciales para mantener las dependencias de tu proyecto aisladas:`,
          code: `# Crear un entorno virtual llamado "fastapi-env"
python -m venv fastapi-env

# Activar el entorno virtual
# En Windows:
fastapi-env\\Scripts\\activate
# En macOS/Linux:
source fastapi-env/bin/activate`,
          explanation: `Un entorno virtual crea un espacio aislado donde puedes instalar dependencias específicas para tu proyecto 
sin afectar otros proyectos o el sistema global. Esto es crucial para evitar conflictos de versiones.`,
          tip: 'Siempre activa el entorno virtual antes de trabajar en tu proyecto. Verás el nombre del entorno en tu prompt.'
        },
        {
          title: 'Instalar FastAPI y Uvicorn',
          content: `Ahora instalaremos FastAPI y Uvicorn, que es el servidor ASGI recomendado:`,
          code: `# Instalar FastAPI
pip install fastapi

# Instalar Uvicorn con todas sus dependencias
pip install "uvicorn[standard]"

# Instalar todo junto (recomendado)
pip install "fastapi[all]"`,
          explanation: `FastAPI es el framework principal, mientras que Uvicorn es el servidor que ejecutará nuestra aplicación. 
La opción "[all]" instala dependencias adicionales útiles como uvicorn, pytest, etc.`,
          tip: 'La opción "[standard]" para uvicorn incluye dependencias para mejor rendimiento y características adicionales.'
        },
        {
          title: 'Verificar instalación',
          content: `Para asegurarte de que todo está instalado correctamente:`,
          code: `# Verificar FastAPI
python -c "import fastapi; print(f'FastAPI versión: {fastapi.__version__}')"

# Verificar Uvicorn
python -c "import uvicorn; print(f'Uvicorn instalado correctamente')"`,
          explanation: `Estos comandos importan las librerías y muestran información sobre ellas. Si no hay errores, 
significa que la instalación fue exitosa.`,
          tip: 'Si recibes errores de importación, intenta reinstalar las dependencias con pip install --force-reinstall.'
        }
      ],
      practiceExercise: {
        title: 'Ejercicio Práctico',
        description: 'Crea tu primer entorno virtual y verifica todas las instalaciones.',
        steps: [
          'Crea una carpeta para tu proyecto: mkdir mi-fastapi-project',
          'Navega a la carpeta: cd mi-fastapi-project',
          'Crea un entorno virtual: python -m venv venv',
          'Activa el entorno virtual según tu sistema operativo',
          'Instala fastapi[all]',
          'Verifica las instalaciones con los comandos anteriores'
        ],
        solution: `# Comandos completos para el ejercicio
mkdir mi-fastapi-project
cd mi-fastapi-project
python -m venv venv

# Windows
venv\\Scripts\\activate
# macOS/Linux
source venv/bin/activate

pip install "fastapi[all]"

# Verificar
python -c "import fastapi; print(f'FastAPI versión: {fastapi.__version__}')"`
      }
    },
    {
      id: 'first-app',
      title: 'Paso 1: Tu Primera Aplicación FastAPI',
      icon: Rocket,
      description: 'Crear y ejecutar tu primera API con FastAPI',
      difficulty: 'Fácil',
      timeEstimate: '20 minutos',
      objectives: [
        'Crear el archivo principal de la aplicación',
        'Definir endpoints básicos',
        'Ejecutar el servidor de desarrollo',
        'Explorar la documentación automática'
      ],
      detailedExplanation: `
Ahora que tenemos el entorno configurado, vamos a crear nuestra primera aplicación FastAPI. 
Este paso es fundamental porque te mostrará la simplicidad y potencia de FastAPI.

Crearemos una API básica con varios endpoints que demuestren las características principales:
• Rutas básicas con diferentes métodos HTTP
• Parámetros de ruta y query
• Validación automática de datos
• Documentación Swagger UI automática

Al final de este paso, tendrás una API funcional que puedes ejecutar y explorar 
a través de la interfaz de documentación automática.
      `,
      prerequisites: [
        'Entorno virtual activado',
        'FastAPI y Uvicorn instalados',
        'Editor de código (VS Code recomendado)'
      ],
      steps: [
        {
          title: 'Crear el archivo principal',
          content: `Crea un archivo llamado main.py en tu proyecto con el siguiente contenido:`,
          code: `from fastapi import FastAPI

# Crear instancia de FastAPI
app = FastAPI(
    title="Mi Primera API",
    description="Esta es mi primera aplicación con FastAPI",
    version="1.0.0"
)

# Endpoint raíz
@app.get("/")
async def read_root():
    return {"message": "¡Hola, FastAPI!", "status": "funcionando"}

# Endpoint con parámetro de ruta
@app.get("/items/{item_id}")
async def read_item(item_id: int, q: str | None = None):
    return {"item_id": item_id, "q": q}

# Endpoint para saludar
@app.get("/saludar/{nombre}")
async def saludar(nombre: str, edad: int | None = None):
    mensaje = f"¡Hola, {nombre}!"
    if edad:
        mensaje += f" Tienes {edad} años."
    return {"mensaje": mensaje}`,
          explanation: `Este código crea una aplicación FastAPI básica con tres endpoints:

1. read_root(): Un endpoint simple que devuelve un mensaje de bienvenida
2. read_item(): Demuestra el uso de parámetros de ruta (item_id) y query (q)
3. saludar(): Muestra cómo manejar parámetros opcionales

FastAPI automáticamente:
• Valida los tipos de datos (item_id debe ser int, nombre debe ser str)
• Genera documentación OpenAPI
• Proporciona manejo de errores automático`,
          tip: 'Usa async def para definir tus funciones de ruta. FastAPI es asíncrono por naturaleza y esto te permite aprovechar al máximo el rendimiento.'
        },
        {
          title: 'Ejecutar el servidor',
          content: `Para ejecutar tu aplicación, usa el siguiente comando en tu terminal:`,
          code: `uvicorn main:app --reload`,
          explanation: `Desglosemos este comando:
• uvicorn: El servidor ASGI que ejecutará nuestra aplicación
• main: El nombre del archivo Python (main.py)
• app: El nombre de la instancia de FastAPI en el archivo
• --reload: Habilita el modo de recarga automática cuando cambias el código

El servidor se iniciará en http://127.0.0.1:8000 por defecto.`,
          tip: 'El modo --reload es excelente para desarrollo porque reinicia automáticamente el servidor cuando guardas cambios en tus archivos.'
        },
        {
          title: 'Probar los endpoints',
          content: `Una vez que el servidor está corriendo, puedes probar tus endpoints:`,
          code: `# Abre tu navegador o usa curl para probar:

# Endpoint raíz
curl http://127.0.0.1:8000/

# Endpoint con parámetro de ruta
curl http://127.0.0.1:8000/items/42

# Endpoint con parámetro de ruta y query
curl "http://127.0.0.1:8000/items/42?q=busqueda"

# Endpoint de saludo
curl http://127.0.0.1:8000/saludar/Maria
curl "http://127.0.0.1:8000/saludar/Juan?edad=25"`,
          explanation: `Cada endpoint responde con datos JSON. FastAPI automáticamente:
• Convierte los diccionarios Python a JSON
• Establece los headers Content-Type correctos
• Maneja la serialización de tipos de datos complejos`,
          tip: 'Puedes usar herramientas como Postman o Insomnia para probar tus APIs de manera más visual.'
        },
        {
          title: 'Explorar la documentación automática',
          content: `FastAPI genera documentación automática. Visita estas URLs en tu navegador:`,
          code: `# Documentación interactiva (Swagger UI)
http://127.0.0.1:8000/docs

# Documentación alternativa (ReDoc)
http://127.0.0.1:8000/redoc

# Esquema OpenAPI en formato JSON
http://127.0.0.1:8000/openapi.json`,
          explanation: `La documentación automática es una de las características más poderosas de FastAPI:

Swagger UI (/docs):
• Interfaz interactiva para probar endpoints
• Muestra todos los endpoints, parámetros y modelos
• Permite enviar requests directamente desde el navegador

ReDoc (/redoc):
• Documentación limpia y profesional
• Ideal para referencia y documentación pública
• Mejor para lectura y comprensión

OpenAPI JSON (/openapi.json):
• Esquema completo de tu API
• Puede ser consumido por otras herramientas
• Base para generar clientes en otros lenguajes`,
          tip: 'La documentación se actualiza automáticamente cuando modificas tu código. ¡No necesitas mantenerla manualmente!'
        }
      ],
      practiceExercise: {
        title: 'Ejercicio Práctico',
        description: 'Amplía tu primera API con más endpoints y características.',
        steps: [
          'Añade un endpoint POST para crear usuarios',
          'Añade validación básica para el email',
          'Crea un endpoint que devuelva la lista de todos los usuarios',
          'Añade un endpoint DELETE para eliminar usuarios',
          'Prueba todo en la documentación Swagger UI'
        ],
        solution: `from fastapi import FastAPI, HTTPException
from typing import List, Dict

app = FastAPI()

# Base de datos en memoria
users_db: List[Dict] = []
user_id_counter = 1

@app.post("/users/")
async def create_user(username: str, email: str):
    global user_id_counter
    
    # Validación básica de email
    if "@" not in email:
        raise HTTPException(status_code=400, detail="Email inválido")
    
    user = {
        "id": user_id_counter,
        "username": username,
        "email": email
    }
    users_db.append(user)
    user_id_counter += 1
    
    return user

@app.get("/users/")
async def get_users():
    return users_db

@app.delete("/users/{user_id}")
async def delete_user(user_id: int):
    global users_db
    users_db = [user for user in users_db if user["id"] != user_id]
    return {"message": "Usuario eliminado"}`
      }
    },
    {
      id: 'pydantic-models',
      title: 'Paso 2: Modelos de Datos con Pydantic',
      icon: Cpu,
      description: 'Validación de datos y creación de modelos robustos',
      difficulty: 'Intermedio',
      timeEstimate: '30 minutos',
      objectives: [
        'Entender los modelos Pydantic',
        'Crear esquemas de validación',
        'Implementar validación avanzada',
        'Usar modelos para request y response'
      ],
      detailedExplanation: `
Pydantic es el corazón de la validación de datos en FastAPI. Permite definir modelos de datos 
con validación automática, serialización y documentación.

En este paso aprenderás:
• Cómo definir modelos Pydantic
• Validación automática de tipos de datos
• Validaciones personalizadas y avanzadas
• Cómo usar diferentes modelos para request y response
• Manejo de datos anidados y relaciones

Pydantic convierte tus type hints en validación automática, lo que significa que:
• No necesitas escribir código de validación manual
• Los datos incorrectos se rechazan automáticamente
• La documentación se genera automáticamente
• Tienes seguridad de tipos en tiempo de ejecución
      `,
      prerequisites: [
        'Conocimientos básicos de Python type hints',
        'Primera aplicación FastAPI funcionando',
        'Familiaridad con conceptos de APIs REST'
      ],
      steps: [
        {
          title: 'Modelos básicos con Pydantic',
          content: `Crea un nuevo archivo models.py para definir tus modelos de datos:`,
          code: `from pydantic import BaseModel, Field, EmailStr
from typing import Optional, List
from datetime import datetime
from enum import Enum

class UserRole(str, Enum):
    ADMIN = "admin"
    USER = "user"
    MODERATOR = "moderator"

class UserBase(BaseModel):
    username: str = Field(..., min_length=3, max_length=50)
    email: EmailStr
    full_name: Optional[str] = Field(None, max_length=100)
    age: Optional[int] = Field(None, ge=18, le=120)
    role: UserRole = UserRole.USER

class UserCreate(UserBase):
    password: str = Field(..., min_length=8)

class UserUpdate(BaseModel):
    username: Optional[str] = Field(None, min_length=3, max_length=50)
    email: Optional[EmailStr] = None
    full_name: Optional[str] = Field(None, max_length=100)
    age: Optional[int] = Field(None, ge=18, le=120)
    role: Optional[UserRole] = None

class User(UserBase):
    id: int
    is_active: bool = True
    created_at: datetime
    
    class Config:
        from_attributes = True`,
          explanation: `Este código define varios modelos Pydantic:

UserBase: Modelo base con campos comunes
• username: Obligatorio, entre 3 y 50 caracteres
• email: Obligatorio, debe ser un email válido (EmailStr)
• full_name: Opcional, máximo 100 caracteres
• age: Opcional, debe estar entre 18 y 120 años
• role: Opcional, debe ser uno de los valores del enum UserRole

UserCreate: Hereda de UserBase y añade password
• password: Obligatorio, mínimo 8 caracteres

UserUpdate: Todos los campos son opcionales para actualizaciones parciales

User: Modelo para respuestas, incluye campos del sistema
• id, is_active, created_at: Campos gestionados por el sistema`,
          tip: 'Field(...) con ... indica que el campo es obligatorio. Sin ... sería opcional.'
        },
        {
          title: 'Validación avanzada',
          content: `Pydantic permite validaciones personalizadas usando validators:`,
          code: `from pydantic import BaseModel, Field, validator
import re

class Product(BaseModel):
    name: str = Field(..., min_length=2, max_length=100)
    price: float = Field(..., gt=0, description="Precio debe ser mayor que 0")
    description: Optional[str] = None
    sku: str
    tags: List[str] = Field(default_factory=list, max_items=10)
    
    @validator('sku')
    def validate_sku(cls, v):
        """Valida que el SKU tenga formato XX-1234"""
        if not re.match(r'^[A-Z]{2}-\\d{4}$', v):
            raise ValueError('SKU debe tener formato XX-1234')
        return v.upper()
    
    @validator('tags')
    def validate_tags(cls, v):
        """Valida y normaliza los tags"""
        if len(v) > 10:
            raise ValueError('Máximo 10 tags permitidos')
        return [tag.strip().lower() for tag in v if tag.strip()]
    
    @validator('name')
    def validate_name(cls, v):
        """Valida que el nombre no contenga palabras prohibidas"""
        forbidden_words = ['admin', 'root', 'system']
        if any(word in v.lower() for word in forbidden_words):
            raise ValueError('El nombre contiene palabras no permitidas')
        return v.title()

# Uso del modelo
try:
    product = Product(
        name="laptop gaming",
        price=999.99,
        sku="LP-1234",
        tags=["gaming", "laptop", "high-performance"]
    )
    print(product.model_dump())
except Exception as e:
    print(f"Error de validación: {e}")`,
          explanation: `Los validators en Pydantic te permiten:

1. Validar formatos complejos (como el SKU con regex)
2. Normalizar datos (convertir tags a minúsculas)
3. Aplicar reglas de negocio (palabras prohibidas)
4. Realizar validaciones cruzadas entre campos

Cada validator:
• Recibe el valor del campo como argumento
• Puede lanzar ValueError si la validación falla
• Debe retornar el valor (posiblemente modificado)
• Se ejecuta después de la validación básica del tipo`,
          tip: 'Usa validators para lógica de negocio compleja que no puede expresarse con las validaciones básicas de Field.'
        },
        {
          title: 'Modelos anidados y relaciones',
          content: `Pydantic soporta modelos anidados para representar relaciones complejas:`,
          code: `from pydantic import BaseModel
from typing import List, Optional

class Address(BaseModel):
    street: str
    city: str
    state: str
    zip_code: str
    country: str = "USA"
    
    @validator('zip_code')
    def validate_zip_code(cls, v):
        if not re.match(r'^\\d{5}(-\\d{4})?$', v):
            raise ValueError('Código postal inválido')
        return v

class Company(BaseModel):
    name: str
    address: Address
    employees: List[str] = []
    website: Optional[str] = None
    
    @validator('website')
    def validate_website(cls, v):
        if v and not v.startswith(('http://', 'https://')):
            raise ValueError('Website debe comenzar con http:// o https://')
        return v

class User(BaseModel):
    id: int
    name: str
    email: str
    company: Optional[Company] = None
    addresses: List[Address] = []
    
    class Config:
        from_attributes = True

# Ejemplo de uso
user_data = {
    "id": 1,
    "name": "John Doe",
    "email": "john@example.com",
    "company": {
        "name": "Tech Corp",
        "address": {
            "street": "123 Main St",
            "city": "San Francisco",
            "state": "CA",
            "zip_code": "94102"
        },
        "employees": ["Alice", "Bob", "Charlie"]
    },
    "addresses": [
        {
            "street": "123 Main St",
            "city": "San Francisco",
            "state": "CA",
            "zip_code": "94102"
        }
    ]
}

try:
    user = User(**user_data)
    print("Usuario válido:", user.model_dump_json(indent=2))
except Exception as e:
    print(f"Error: {e}")`,
          explanation: `Los modelos anidados permiten representar estructuras de datos complejas:

Address: Modelo para direcciones con validación de código postal
• Todos los campos son obligatorios excepto country (con valor por defecto)
• Validación de formato para zip_code

Company: Modelo que contiene un Address
• address es un modelo anidado obligatorio
• employees es una lista de strings
• website es opcional pero tiene validación si se proporciona

User: Modelo principal que contiene otros modelos
• company y addresses son modelos anidados
• La validación se aplica recursivamente a todos los niveles

FastAPI usará estos modelos para:
• Validar request bodies complejos
• Generar documentación detallada
• Serializar respuestas automáticamente`,
          tip: 'Usa from_attributes = True para permitir la creación de modelos desde objetos ORM (como SQLAlchemy).'
        },
        {
          title: 'Integración con FastAPI',
          content: `Ahora integremos los modelos Pydantic en nuestra aplicación FastAPI:`,
          code: `from fastapi import FastAPI, HTTPException
from pydantic import BaseModel, Field
from typing import List, Optional
from datetime import datetime

app = FastAPI()

# Base de datos en memoria
users_db = []
user_id_counter = 1

class UserBase(BaseModel):
    username: str = Field(..., min_length=3, max_length=50)
    email: str = Field(..., regex=r'^[^@]+@[^@]+\\.[^@]+$')
    full_name: Optional[str] = None

class UserCreate(UserBase):
    password: str = Field(..., min_length=8)

class UserResponse(UserBase):
    id: int
    created_at: datetime
    
    class Config:
        from_attributes = True

@app.post("/users/", response_model=UserResponse)
async def create_user(user: UserCreate):
    global user_id_counter
    
    # Verificar si el email ya existe
    for existing_user in users_db:
        if existing_user["email"] == user.email:
            raise HTTPException(
                status_code=400,
                detail="Email ya registrado"
            )
    
    # Crear nuevo usuario
    new_user = {
        "id": user_id_counter,
        "username": user.username,
        "email": user.email,
        "full_name": user.full_name,
        "created_at": datetime.now()
    }
    
    users_db.append(new_user)
    user_id_counter += 1
    
    return new_user

@app.get("/users/", response_model=List[UserResponse])
async def get_users():
    return users_db

@app.get("/users/{user_id}", response_model=UserResponse)
async def get_user(user_id: int):
    for user in users_db:
        if user["id"] == user_id:
            return user
    raise HTTPException(status_code=404, detail="Usuario no encontrado")

@app.put("/users/{user_id}", response_model=UserResponse)
async def update_user(user_id: int, user_update: UserBase):
    for i, user in enumerate(users_db):
        if user["id"] == user_id:
            # Actualizar solo los campos proporcionados
            update_data = user_update.model_dump(exclude_unset=True)
            users_db[i].update(update_data)
            return users_db[i]
    raise HTTPException(status_code=404, detail="Usuario no encontrado")`,
          explanation: `Esta integración muestra cómo usar modelos Pydantic en FastAPI:

1. UserCreate: Modelo para crear usuarios (incluye password)
2. UserBase: Modelo base con campos comunes
3. UserResponse: Modelo para respuestas (no incluye password)

Características clave:
• response_model: Define el esquema de la respuesta
• Validación automática del request body
• exclude_unset=True: Solo actualiza campos proporcionados
• Manejo automático de errores de validación

FastAPI automáticamente:
• Valida el request body contra UserCreate
• Serializa la respuesta según UserResponse
• Genera documentación OpenAPI completa
• Proporciona errores detallados si la validación falla`,
          tip: 'Usa diferentes modelos para request y response para controlar qué datos se exponen (como no incluir passwords en las respuestas).'
        }
      ],
      practiceExercise: {
        title: 'Ejercicio Práctico',
        description: 'Crea un sistema de blog con modelos Pydantic completos.',
        steps: [
          'Define modelos para Post, Comment, y User',
          'Añade validaciones específicas para cada modelo',
          'Crea endpoints CRUD para cada modelo',
          'Implementa relaciones entre modelos',
          'Prueba la validación con datos incorrectos'
        ],
        solution: `from pydantic import BaseModel, Field, validator
from typing import List, Optional
from datetime import datetime
from enum import Enum

class PostStatus(str, Enum):
    DRAFT = "draft"
    PUBLISHED = "published"
    ARCHIVED = "archived"

class UserBase(BaseModel):
    username: str = Field(..., min_length=3, max_length=30)
    email: str = Field(..., regex=r'^[^@]+@[^@]+\\.[^@]+$')
    bio: Optional[str] = Field(None, max_length=500)

class UserCreate(UserBase):
    password: str = Field(..., min_length=8)

class User(UserBase):
    id: int
    created_at: datetime
    
    class Config:
        from_attributes = True

class CommentBase(BaseModel):
    content: str = Field(..., min_length=1, max_length=1000)
    
    @validator('content')
    def validate_content(cls, v):
        if len(v.strip()) == 0:
            raise ValueError('El contenido no puede estar vacío')
        return v.strip()

class CommentCreate(CommentBase):
    post_id: int

class Comment(CommentBase):
    id: int
    author_id: int
    created_at: datetime
    
    class Config:
        from_attributes = True

class PostBase(BaseModel):
    title: str = Field(..., min_length=5, max_length=200)
    content: str = Field(..., min_length=10)
    status: PostStatus = PostStatus.DRAFT
    tags: List[str] = Field(default_factory=list, max_items=5)

class PostCreate(PostBase):
    pass

class Post(PostBase):
    id: int
    author_id: int
    created_at: datetime
    updated_at: Optional[datetime] = None
    comments: List[Comment] = []
    
    class Config:
        from_attributes = True`
      }
    },
    {
      id: 'database-integration',
      title: 'Paso 3: Integración con Base de Datos',
      icon: Database,
      description: 'Conectar FastAPI con bases de datos usando SQLAlchemy',
      difficulty: 'Intermedio',
      timeEstimate: '45 minutos',
      objectives: [
        'Configurar SQLAlchemy con FastAPI',
        'Crear modelos de base de datos',
        'Implementar operaciones CRUD',
        'Manejar sesiones de base de datos'
      ],
      detailedExplanation: `
La integración con bases de datos es esencial para aplicaciones reales. FastAPI se integra 
perfectamente con SQLAlchemy, el ORM más popular de Python.

En este paso aprenderás:
• Cómo configurar SQLAlchemy para modo asíncrono
• Crear modelos de base de datos con relaciones
• Implementar operaciones CRUD (Create, Read, Update, Delete)
• Manejar sesiones de base de datos de manera segura
• Usar migraciones para gestionar cambios en el esquema

La combinación de FastAPI + SQLAlchemy + Pydantic proporciona:
• Validación de datos en múltiples capas
• Tipado estático completo
• Alto rendimiento con operaciones asíncronas
• Mantenibilidad y escalabilidad
      `,
      prerequisites: [
        'Conocimientos básicos de SQL',
        'Modelos Pydantic comprendidos',
        'FastAPI básico funcionando'
      ],
      steps: [
        {
          title: 'Instalar dependencias de base de datos',
          content: `Primero, instala las dependencias necesarias para trabajar con bases de datos:`,
          code: `# Para SQLite (recomendado para empezar)
pip install sqlalchemy "aiosqlite"

# Para PostgreSQL (para producción)
pip install sqlalchemy "asyncpg" 

# Para MySQL
pip install sqlalchemy "aiomysql"

# Herramientas adicionales útiles
pip install alembic  # Para migraciones
pip install python-dotenv  # Para variables de entorno`,
          explanation: `Dependencias explicadas:

SQLAlchemy: El ORM principal que proporciona:
• Mapeo objeto-relacional
• Generación de consultas SQL
• Manejo de conexiones
• Migraciones de esquema

Drivers asíncronos:
• aiosqlite: Para SQLite (ideal para desarrollo)
• asyncpg: Para PostgreSQL (alto rendimiento)
• aiomysql: Para MySQL

Alembic: Herramienta de migraciones que permite:
• Gestionar cambios en el esquema de la BD
• Versionar el esquema de la base de datos
• Aplicar cambios de manera controlada

python-dotenv: Para manejar variables de entorno de manera segura`,
          tip: 'Comienza con SQLite para desarrollo y pruebas, luego migra a PostgreSQL para producción.'
        },
        {
          title: 'Configurar la conexión a la base de datos',
          content: `Crea un archivo de configuración para la base de datos:`,
          code: `# app/core/config.py
from pydantic_settings import BaseSettings

class Settings(BaseSettings):
    # Configuración de la aplicación
    app_name: str = "FastAPI Database App"
    debug: bool = True
    
    # Base de datos
    database_url: str = "sqlite+aiosqlite:///./app.db"
    # Para PostgreSQL: "postgresql+asyncpg://user:password@localhost/dbname"
    
    # Seguridad
    secret_key: str = "your-secret-key-change-in-production"
    
    class Config:
        env_file = ".env"

settings = Settings()

# app/db/session.py
from sqlalchemy.ext.asyncio import AsyncSession, create_async_engine
from sqlalchemy.orm import sessionmaker
from app.core.config import settings

# Crear el motor de base de datos asíncrono
engine = create_async_engine(
    settings.database_url,
    echo=settings.debug,  # Mostrar queries en debug
    future=True
)

# Crear la fábrica de sesiones
AsyncSessionLocal = sessionmaker(
    engine,
    class_=AsyncSession,
    expire_on_commit=False,
    autoflush=False
)

# Dependencia para obtener la sesión de BD
async def get_db() -> AsyncSession:
    async with AsyncSessionLocal() as session:
        try:
            yield session
        finally:
            await session.close()

# app/db/base.py
from sqlalchemy.ext.asyncio import AsyncAttrs
from sqlalchemy.orm import DeclarativeBase

class Base(AsyncAttrs, DeclarativeBase):
    """Clase base para todos los modelos de SQLAlchemy"""
    pass`,
          explanation: `Esta configuración establece:

1. Configuración centralizada (config.py):
• Manejo de variables de entorno
• URL de la base de datos configurable
• Configuración de la aplicación

2. Conexión a la base de datos (session.py):
• Motor asíncrono para mejor rendimiento
• Fábrica de sesiones con configuración óptima
• Dependencia get_db para inyección en endpoints

3. Clase base para modelos (base.py):
• AsyncAttrs para soporte asíncrono
• DeclarativeBase para modelos SQLAlchemy
• Herencia común para todos los modelos

La función get_db es una dependencia que:
• Crea una sesión para cada request
• Asegura que la sesión se cierre correctamente
• Maneja errores y rollback automático`,
          tip: 'Usa echo=True solo en desarrollo para ver las queries SQL. En producción, desactívalo por seguridad y rendimiento.'
        },
        {
          title: 'Crear modelos de base de datos',
          content: `Define los modelos de SQLAlchemy para tu aplicación:`,
          code: `# app/models/user.py
from sqlalchemy import Column, Integer, String, Boolean, DateTime, Text
from sqlalchemy.sql import func
from sqlalchemy.orm import relationship
from app.db.base import Base

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
    
    # Relaciones
    posts = relationship("Post", back_populates="author")
    comments = relationship("Comment", back_populates="author")

# app/models/post.py
from sqlalchemy import Column, Integer, String, Text, Boolean, DateTime, ForeignKey
from sqlalchemy.sql import func
from sqlalchemy.orm import relationship
from app.db.base import Base

class Post(Base):
    __tablename__ = "posts"
    
    id = Column(Integer, primary_key=True, index=True)
    title = Column(String(200), nullable=False)
    content = Column(Text, nullable=False)
    is_published = Column(Boolean, default=False)
    created_at = Column(DateTime(timezone=True), server_default=func.now())
    updated_at = Column(DateTime(timezone=True), onupdate=func.now())
    
    # Claves foráneas
    author_id = Column(Integer, ForeignKey("users.id"))
    
    # Relaciones
    author = relationship("User", back_populates="posts")
    comments = relationship("Comment", back_populates="post")

# app/models/comment.py
from sqlalchemy import Column, Integer, Text, DateTime, ForeignKey
from sqlalchemy.sql import func
from sqlalchemy.orm import relationship
from app.db.base import Base

class Comment(Base):
    __tablename__ = "comments"
    
    id = Column(Integer, primary_key=True, index=True)
    content = Column(Text, nullable=False)
    created_at = Column(DateTime(timezone=True), server_default=func.now())
    
    # Claves foráneas
    author_id = Column(Integer, ForeignKey("users.id"))
    post_id = Column(Integer, ForeignKey("posts.id"))
    
    # Relaciones
    author = relationship("User", back_populates="comments")
    post = relationship("Post", back_populates="comments")`,
          explanation: `Estos modelos SQLAlchemy definen la estructura de la base de datos:

Modelo User:
• Campos básicos: id, username, email, full_name
• Seguridad: hashed_password (nunca guardar passwords en texto plano)
• Estado: is_active para manejo de usuarios
• Timestamps: created_at, updated_at automáticos
• Relaciones: posts y comments (uno a muchos)

Modelo Post:
• Contenido: title, content, is_published
• Autor: author_id (FK a users)
• Timestamps automáticos
• Relaciones: author (muchos a uno) y comments (uno a muchos)

Modelo Comment:
• Contenido: content obligatorio
• Autor y Post: author_id y post_id (FKs)
• Timestamp automático
• Relaciones: author y post (muchos a uno)

Características clave:
• index=True en campos frecuentemente consultados
• nullable=False para campos obligatorios
• server_default=func.now() para timestamps automáticos
• relationship para navegación fácil entre modelos`,
          tip: 'Usa nombres descriptivos para las relaciones y siempre define ambas direcciones (back_populates) para consistencia.'
        },
        {
          title: 'Crear las tablas en la base de datos',
          content: `Crea un script para inicializar la base de datos:`,
          code: `# app/db/init_db.py
from sqlalchemy.ext.asyncio import AsyncSession, create_async_engine
from app.db.base import Base
from app.core.config import settings
import asyncio

async def init_db():
    """Crear todas las tablas en la base de datos"""
    engine = create_async_engine(settings.database_url)
    
    async with engine.begin() as conn:
        # Crear todas las tablas definidas en los modelos
        await conn.run_sync(Base.metadata.create_all)
    
    await engine.dispose()
    print("Base de datos inicializada correctamente")

if __name__ == "__main__":
    asyncio.run(init_db())

# O puedes crear un endpoint para inicializar la BD
# app/api/v1/endpoints/db.py
from fastapi import APIRouter, Depends
from sqlalchemy.ext.asyncio import AsyncSession
from app.db.session import get_db
from app.db.base import Base
from sqlalchemy.ext.asyncio import create_async_engine
from app.core.config import settings

router = APIRouter()

@router.post("/init-db")
async def initialize_database():
    """Inicializar la base de datos (solo para desarrollo)"""
    engine = create_async_engine(settings.database_url)
    
    async with engine.begin() as conn:
        await conn.run_sync(Base.metadata.create_all)
    
    await engine.dispose()
    return {"message": "Base de datos inicializada correctamente"}

# Para usar este endpoint, impórtalo en tu main.py
# app.include_router(db_router, prefix="/api/v1", tags=["database"])`,
          explanation: `Este código muestra dos formas de crear las tablas:

1. Script independiente (init_db.py):
• Ejecutable desde la línea de comandos
• Crea todas las tablas definidas en los modelos
• Ideal para configuración inicial
• Se ejecuta con: python -m app.db.init_db

2. Endpoint HTTP (opcional):
• Permite inicializar la BD via HTTP
• Útil para desarrollo y pruebas
• No recomendado para producción por seguridad

Base.metadata.create_all():
• Analiza todos los modelos que heredan de Base
• Genera las sentencias CREATE TABLE correspondientes
• Maneja dependencias entre tablas (FKs)
• Crea índices definidos en los modelos

Para producción, considera usar migraciones con Alembic:
• Permite versionar los cambios en el esquema
• Facilita el despliegue en diferentes entornos
• Permite rollback de cambios
• Maneja datos existentes durante cambios`,
          tip: 'En producción, usa siempre migraciones (Alembic) en lugar de create_all para manejar cambios en el esquema de forma segura.'
        },
        {
          title: 'Implementar operaciones CRUD',
          content: `Crea una capa CRUD para manejar operaciones de base de datos:`,
          code: `# app/crud/base.py
from typing import Generic, TypeVar, Type, Optional, List
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy.future import select
from sqlalchemy.orm import selectinload

ModelType = TypeVar("ModelType")

class CRUDBase(Generic[ModelType]):
    def __init__(self, model: Type[ModelType]):
        self.model = model

    async def get(self, db: AsyncSession, id: int) -> Optional[ModelType]:
        """Obtener un registro por ID"""
        result = await db.execute(select(self.model).where(self.model.id == id))
        return result.scalar_one_or_none()

    async def get_multi(
        self, db: AsyncSession, *, skip: int = 0, limit: int = 100
    ) -> List[ModelType]:
        """Obtener múltiples registros con paginación"""
        result = await db.execute(
            select(self.model).offset(skip).limit(limit)
        )
        return result.scalars().all()

    async def create(self, db: AsyncSession, *, obj_in: dict) -> ModelType:
        """Crear un nuevo registro"""
        obj = self.model(**obj_in)
        db.add(obj)
        await db.commit()
        await db.refresh(obj)
        return obj

    async def update(
        self, db: AsyncSession, *, db_obj: ModelType, obj_in: dict
    ) -> ModelType:
        """Actualizar un registro existente"""
        for field, value in obj_in.items():
            setattr(db_obj, field, value)
        await db.commit()
        await db.refresh(db_obj)
        return db_obj

    async def delete(self, db: AsyncSession, *, id: int) -> Optional[ModelType]:
        """Eliminar un registro por ID"""
        obj = await self.get(db, id=id)
        if obj:
            await db.delete(obj)
            await db.commit()
        return obj

    async def get_with_relations(
        self, db: AsyncSession, id: int, relations: List[str]
    ) -> Optional[ModelType]:
        """Obtener un registro con sus relaciones cargadas"""
        query = select(self.model).where(self.model.id == id)
        
        # Cargar relaciones dinámicamente
        for relation in relations:
            query = query.options(selectinload(getattr(self.model, relation)))
        
        result = await db.execute(query)
        return result.scalar_one_or_none()

# app/crud/user.py
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy.future import select
from sqlalchemy.orm import selectinload
from app.models.user import User
from app.schemas.user import UserCreate, UserUpdate
from app.crud.base import CRUDBase
from app.core.security import get_password_hash, verify_password

class CRUDUser(CRUDBase[User]):
    async def get_by_username(self, db: AsyncSession, username: str) -> Optional[User]:
        """Obtener usuario por username"""
        result = await db.execute(select(User).where(User.username == username))
        return result.scalar_one_or_none()

    async def get_by_email(self, db: AsyncSession, email: str) -> Optional[User]:
        """Obtener usuario por email"""
        result = await db.execute(select(User).where(User.email == email))
        return result.scalar_one_or_none()

    async def create(self, db: AsyncSession, *, obj_in: UserCreate) -> User:
        """Crear usuario con password hasheado"""
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

    async def update(
        self, db: AsyncSession, *, db_obj: User, obj_in: UserUpdate
    ) -> User:
        """Actualizar usuario (excluyendo password)"""
        if obj_in.password:
            hashed_password = get_password_hash(obj_in.password)
            setattr(db_obj, "hashed_password", hashed_password)
        
        update_data = obj_in.model_dump(exclude={"password"}, exclude_unset=True)
        for field, value in update_data.items():
            setattr(db_obj, field, value)
        
        await db.commit()
        await db.refresh(db_obj)
        return db_obj

    async def authenticate(self, db: AsyncSession, *, username: str, password: str) -> Optional[User]:
        """Autenticar usuario"""
        user = await self.get_by_username(db, username=username)
        if not user:
            return None
        if not verify_password(password, user.hashed_password):
            return None
        return user

    async def get_with_posts(self, db: AsyncSession, id: int) -> Optional[User]:
        """Obtener usuario con sus posts"""
        return await self.get_with_relations(db, id, ["posts"])

user = CRUDUser(User)`,
          explanation: `Esta implementación CRUD proporciona:

CRUDBase (clase genérica):
• Operaciones básicas: get, get_multi, create, update, delete
• Reutilizable para cualquier modelo
• Manejo adecuado de sesiones asíncronas
• Soporte para relaciones con get_with_relations

CRUDUser (extensión especializada):
• Métodos específicos para usuarios
• Manejo seguro de passwords (hashing)
• Autenticación de usuarios
• Búsquedas por username y email
• Carga de relaciones (posts)

Características clave:
• Uso de select() moderno de SQLAlchemy 2.0
• Manejo adecuado de commits y refresh
• Soporte para actualizaciones parciales (exclude_unset)
• Validación y hashing de passwords
• Carga eficiente de relaciones

Patrones implementados:
• Generic programming para reutilización
• Dependency injection con AsyncSession
• Separación de concerns (CRUD vs Business Logic)
• Manejo seguro de datos sensibles`,
          tip: 'Siempre hashea los passwords antes de guardarlos en la base de datos. Nunca guardes passwords en texto plano.'
        }
      ],
      practiceExercise: {
        title: 'Ejercicio Práctico',
        description: 'Implementa un sistema completo de blog con base de datos.',
        steps: [
          'Crea modelos para Post, Category, y Tag',
          'Implementa clases CRUD para cada modelo',
          'Crea endpoints con todas las operaciones CRUD',
          'Añade relaciones entre modelos (muchos a muchos)',
          'Implementa búsqueda y filtrado avanzado'
        ],
        solution: `# app/models/post.py (extendido)
from sqlalchemy import Column, Integer, String, Text, Boolean, DateTime, ForeignKey, Table
from sqlalchemy.sql import func
from sqlalchemy.orm import relationship
from app.db.base import Base

# Tabla de asociación para muchos a muchos
post_tags = Table(
    'post_tags', Base.metadata,
    Column('post_id', Integer, ForeignKey('posts.id'), primary_key=True),
    Column('tag_id', Integer, ForeignKey('tags.id'), primary_key=True)
)

class Post(Base):
    __tablename__ = "posts"
    
    id = Column(Integer, primary_key=True, index=True)
    title = Column(String(200), nullable=False)
    content = Column(Text, nullable=False)
    summary = Column(String(500))
    is_published = Column(Boolean, default=False)
    view_count = Column(Integer, default=0)
    created_at = Column(DateTime(timezone=True), server_default=func.now())
    updated_at = Column(DateTime(timezone=True), onupdate=func.now())
    
    # Claves foráneas
    author_id = Column(Integer, ForeignKey("users.id"))
    category_id = Column(Integer, ForeignKey("categories.id"))
    
    # Relaciones
    author = relationship("User", back_populates="posts")
    category = relationship("Category", back_populates="posts")
    tags = relationship("Tag", secondary=post_tags, back_populates="posts")
    comments = relationship("Comment", back_populates="post")

# app/models/category.py
class Category(Base):
    __tablename__ = "categories"
    
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String(100), unique=True, nullable=False)
    description = Column(Text)
    created_at = Column(DateTime(timezone=True), server_default=func.now())
    
    # Relaciones
    posts = relationship("Post", back_populates="category")

# app/models/tag.py
class Tag(Base):
    __tablename__ = "tags"
    
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String(50), unique=True, nullable=False)
    color = Column(String(7), default="#007bff")  # Color en formato hex
    created_at = Column(DateTime(timezone=True), server_default=func.now())
    
    # Relaciones
    posts = relationship("Post", secondary=post_tags, back_populates="tags")`
      }
    }
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

  const markStepComplete = (stepIndex: number) => {
    if (!completedSteps.includes(stepIndex)) {
      setCompletedSteps([...completedSteps, stepIndex])
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

  const currentStepData = detailedSteps[currentStep]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Header */}
      <header className="border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 shadow-sm">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl">
                <GraduationCap className="h-8 w-8 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Guía Detallada FastAPI
                </h1>
                <p className="text-muted-foreground mt-1">
                  Aprende paso a paso con explicaciones detalladas
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Badge variant="secondary" className="text-sm">
                {currentStepData.difficulty}
              </Badge>
              <Badge variant="outline" className="text-sm">
                {currentStepData.timeEstimate}
              </Badge>
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => window.location.href = '/'}
                className="flex items-center gap-2"
              >
                <BookOpen className="h-4 w-4" />
                Guía Rápida
              </Button>
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => window.location.href = '/practical-example'}
                className="flex items-center gap-2"
              >
                <Rocket className="h-4 w-4" />
                Ejemplo Práctico
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Progress Bar */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center gap-4 mb-4">
          <div className="flex-1">
            <div className="flex justify-between text-sm text-muted-foreground mb-2">
              <span>Paso {currentStep + 1} de {detailedSteps.length}</span>
              <span>{Math.round(((currentStep + 1) / detailedSteps.length) * 100)}% Completado</span>
            </div>
            <Progress value={((currentStep + 1) / detailedSteps.length) * 100} className="h-2" />
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-6">
        <div className="grid lg:grid-cols-4 gap-6">
          {/* Sidebar Navigation */}
          <nav className="lg:col-span-1">
            <Card className="sticky top-6">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Target className="h-5 w-5" />
                  Pasos del Curso
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <ScrollArea className="h-[calc(100vh-300px)]">
                  <div className="space-y-2 p-4">
                    {detailedSteps.map((step, index) => {
                      const Icon = step.icon
                      const isCompleted = completedSteps.includes(index)
                      const isCurrent = index === currentStep
                      
                      return (
                        <button
                          key={step.id}
                          onClick={() => setCurrentStep(index)}
                          className={`w-full text-left p-3 rounded-lg transition-all duration-200 ${
                            isCurrent 
                              ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg' 
                              : isCompleted
                              ? 'bg-green-50 border border-green-200 hover:bg-green-100'
                              : 'bg-gray-50 hover:bg-gray-100'
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <div className={`p-2 rounded-lg ${
                              isCurrent ? 'bg-white/20' : isCompleted ? 'bg-green-100' : 'bg-gray-200'
                            }`}>
                              {isCompleted ? (
                                <CheckCircle className="h-4 w-4 text-green-600" />
                              ) : (
                                <Icon className={`h-4 w-4 ${isCurrent ? 'text-white' : 'text-gray-600'}`} />
                              )}
                            </div>
                            <div className="flex-1">
                              <div className="font-medium text-sm">{step.title}</div>
                              <div className="text-xs opacity-75 mt-1">{step.timeEstimate}</div>
                            </div>
                          </div>
                        </button>
                      )
                    })}
                  </div>
                </ScrollArea>
              </CardContent>
            </Card>
          </nav>

          {/* Main Content */}
          <main className="lg:col-span-3">
            <div className="space-y-6">
              {/* Step Header */}
              <Card className="border-l-4 border-l-blue-500">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl">
                        {React.createElement(currentStepData.icon, { className: "h-6 w-6 text-white" })}
                      </div>
                      <div>
                        <CardTitle className="text-xl">{currentStepData.title}</CardTitle>
                        <CardDescription className="text-base mt-1">
                          {currentStepData.description}
                        </CardDescription>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary">{currentStepData.difficulty}</Badge>
                      <Badge variant="outline">{currentStepData.timeEstimate}</Badge>
                    </div>
                  </div>
                </CardHeader>
              </Card>

              {/* Objectives */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Target className="h-5 w-5" />
                    Objetivos de Aprendizaje
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-3">
                    {currentStepData.objectives.map((objective, index) => (
                      <div key={index} className="flex items-center gap-2 p-3 bg-blue-50 rounded-lg">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <span className="text-sm">{objective}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Detailed Explanation */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <BookOpen className="h-5 w-5" />
                    Explicación Detallada
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="prose prose-sm max-w-none">
                    <div className="whitespace-pre-wrap text-gray-700 leading-relaxed">
                      {currentStepData.detailedExplanation}
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Prerequisites */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <AlertCircle className="h-5 w-5" />
                    Requisitos Previos
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {currentStepData.prerequisites.map((prereq, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                        <span className="text-sm">{prereq}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Step-by-Step Instructions */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Wrench className="h-5 w-5" />
                    Instrucciones Paso a Paso
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {currentStepData.steps.map((step, stepIndex) => (
                    <div key={stepIndex} className="space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full flex items-center justify-center font-semibold text-sm">
                          {stepIndex + 1}
                        </div>
                        <h3 className="font-semibold text-lg">{step.title}</h3>
                      </div>
                      
                      <div className="ml-11 space-y-4">
                        <div className="text-gray-700 leading-relaxed">
                          {step.content}
                        </div>
                        
                        {step.code && (
                          <div>
                            <CodeBlock code={step.code} id={`step-${currentStep}-${stepIndex}`} />
                          </div>
                        )}
                        
                        {step.explanation && (
                          <Alert>
                            <AlertCircle className="h-4 w-4" />
                            <AlertDescription className="text-sm">
                              <strong>Explicación:</strong> {step.explanation}
                            </AlertDescription>
                          </Alert>
                        )}
                        
                        {step.tip && (
                          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3">
                            <div className="flex items-center gap-2 mb-1">
                              <Lightbulb className="h-4 w-4 text-yellow-600" />
                              <span className="font-medium text-sm text-yellow-800">Tip</span>
                            </div>
                            <p className="text-sm text-yellow-700">{step.tip}</p>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Practice Exercise */}
              <Card className="border-l-4 border-l-green-500">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Zap className="h-5 w-5" />
                    {currentStepData.practiceExercise.title}
                  </CardTitle>
                  <CardDescription>{currentStepData.practiceExercise.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-medium mb-3">Pasos a seguir:</h4>
                    <ol className="space-y-2">
                      {currentStepData.practiceExercise.steps.map((step, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <span className="w-6 h-6 bg-green-100 text-green-700 rounded-full flex items-center justify-center text-xs font-semibold mt-0.5">
                            {index + 1}
                          </span>
                          <span className="text-sm">{step}</span>
                        </li>
                      ))}
                    </ol>
                  </div>
                  
                  <div>
                    <h4 className="font-medium mb-3">Solución de referencia:</h4>
                    <CodeBlock 
                      code={currentStepData.practiceExercise.solution} 
                      id={`solution-${currentStep}`} 
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Navigation Buttons */}
              <div className="flex items-center justify-between pt-6">
                <Button
                  variant="outline"
                  onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
                  disabled={currentStep === 0}
                  className="flex items-center gap-2"
                >
                  <ArrowLeft className="h-4 w-4" />
                  Anterior
                </Button>
                
                <Button
                  onClick={() => {
                    markStepComplete(currentStep)
                    setCurrentStep(Math.min(detailedSteps.length - 1, currentStep + 1))
                  }}
                  className="flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700"
                >
                  {currentStep === detailedSteps.length - 1 ? '¡Completado!' : 'Siguiente'}
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </main>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 mt-12">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground">
              © 2025 Guía Detallada FastAPI. Diseñado para estudiantes y desarrolladores.
            </p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <Button 
                variant="ghost" 
                size="sm"
                onClick={() => window.location.href = '/'}
                className="flex items-center gap-2 hover:bg-blue-100"
              >
                <BookOpen className="h-4 w-4" />
                Guía Rápida
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
                Documentación Oficial
              </Button>
              <Button variant="ghost" size="sm" className="flex items-center gap-2 hover:bg-blue-100">
                <GraduationCap className="h-4 w-4 mr-2" />
                Más Recursos
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}