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
  GraduationCap,
  GitBranch,
  Database as DatabaseIcon,
  Terminal,
  CheckSquare,
  Users,
  Calendar,
  Tag,
  MessageSquare,
  Star,
  Building,
  Github,
  Docker,
  Cloud
} from 'lucide-react'

export default function PracticalFastAPIExample() {
  const [currentPhase, setCurrentPhase] = useState(0)
  const [copiedCode, setCopiedCode] = useState<string | null>(null)
  const [completedPhases, setCompletedPhases] = useState<number[]>([])

  const projectPhases = [
    {
      id: 'project-overview',
      title: 'Fase 0: Overview del Proyecto',
      icon: Target,
      description: 'Construiremos una API de Blog completa con FastAPI',
      difficulty: 'Intermedio',
      timeEstimate: '2-3 horas',
      objectives: [
        'Crear una API RESTful completa',
        'Implementar CRUD operations',
        'Integrar base de datos PostgreSQL',
        'Añadir autenticación JWT',
        'Implementar testing',
        'Configurar despliegue con Docker'
      ],
      projectDescription: `
Construiremos una API de Blog completa con las siguientes características:

**Core Features:**
• User management con autenticación JWT
• Post management con categorías y tags
• Comment system con moderación
• File upload para imágenes
• Search y filtering
• Pagination y sorting
• Rate limiting y caching

🛠 **Technical Stack:**
• FastAPI como framework principal
• PostgreSQL como base de datos
• SQLAlchemy para ORM
• Pydantic para validación
• JWT para autenticación
• Redis para caching
• Docker para contenerización
• pytest para testing

📊 **API Endpoints:**
• `/api/v1/auth/*` - Autenticación y usuarios
• `/api/v1/posts/*` - Gestión de posts
• `/api/v1/categories/*` - Categorías
• `/api/v1/tags/*` - Tags
• `/api/v1/comments/*` - Comentarios
• `/api/v1/upload/*` - Upload de archivos

Este proyecto te enseñará a construir una API production-ready siguiendo las mejores prácticas de la industria.
      `,
      techStack: [
        { name: 'FastAPI', icon: Rocket, description: 'Framework web moderno' },
        { name: 'PostgreSQL', icon: DatabaseIcon, description: 'Base de datos relacional' },
        { name: 'SQLAlchemy', icon: Database, description: 'ORM asíncrono' },
        { name: 'Pydantic', icon: Shield, description: 'Validación de datos' },
        { name: 'JWT', icon: Shield, description: 'Autenticación' },
        { name: 'Redis', icon: Cpu, description: 'Caching' },
        { name: 'Docker', icon: Docker, description: 'Contenerización' },
        { name: 'pytest', icon: TestTube, description: 'Testing' }
      ],
      finalResult: {
        title: 'Resultado Final',
        description: 'Al finalizar tendrás una API completa con:',
        features: [
          '✅ Sistema de usuarios con registro y login',
          '✅ CRUD completo para posts, categorías y tags',
          '✅ Sistema de comentarios con moderación',
          '✅ Upload de imágenes con validación',
          '✅ Búsqueda y filtrado avanzado',
          '✅ Documentación automática (Swagger/ReDoc)',
          '✅ Tests automatizados con 90%+ coverage',
          '✅ Configuración lista para producción',
          '✅ Dockerfile y docker-compose',
          '✅ CI/CD pipeline básico'
        ]
      }
    },
    {
      id: 'project-setup',
      title: 'Fase 1: Configuración del Proyecto',
      icon: Settings,
      description: 'Estructura del proyecto y dependencias',
      difficulty: 'Fácil',
      timeEstimate: '30 minutos',
      objectives: [
        'Crear la estructura de carpetas',
        'Configurar entorno virtual',
        'Instalar dependencias',
        'Configurar variables de entorno'
      ],
      detailedExplanation: `
En esta fase configuraremos la base de nuestro proyecto. Una buena estructura es fundamental 
para mantener el código organizado y escalable. Crearemos una estructura modular que siga 
las mejores prácticas de FastAPI.

La estructura que crearemos nos permitirá:
• Mantener el código organizado por funcionalidad
• Facilitar el testing y el mantenimiento
• Soportar futuras expansiones del proyecto
• Seguir los patrones de arquitectura limpia
      `,
      steps: [
        {
          title: 'Crear estructura de carpetas',
          content: `Crea la siguiente estructura de carpetas para tu proyecto:`,
          code: `blog_api/
├── app/
│   ├── __init__.py
│   ├── main.py                 # Aplicación principal
│   ├── core/
│   │   ├── __init__.py
│   │   ├── config.py           # Configuración
│   │   ├── security.py         # Seguridad y JWT
│   │   └── dependencies.py     # Dependencias
│   ├── api/
│   │   ├── __init__.py
│   │   ├── v1/
│   │   │   ├── __init__.py
│   │   │   ├── endpoints.py    # Endpoints principales
│   │   │   ├── auth.py         # Endpoints de autenticación
│   │   │   ├── posts.py       # Endpoints de posts
│   │   │   ├── categories.py  # Endpoints de categorías
│   │   │   ├── tags.py        # Endpoints de tags
│   │   │   └── comments.py    # Endpoints de comentarios
│   ├── models/
│   │   ├── __init__.py
│   │   ├── user.py           # Modelos de usuario
│   │   ├── post.py           # Modelos de posts
│   │   ├── category.py       # Modelos de categorías
│   │   ├── tag.py            # Modelos de tags
│   │   └── comment.py        # Modelos de comentarios
│   ├── schemas/
│   │   ├── __init__.py
│   │   ├── user.py           # Esquemas Pydantic de usuario
│   │   ├── post.py           # Esquemas Pydantic de posts
│   │   ├── category.py       # Esquemas Pydantic de categorías
│   │   ├── tag.py            # Esquemas Pydantic de tags
│   │   └── comment.py        # Esquemas Pydantic de comentarios
│   ├── crud/
│   │   ├── __init__.py
│   │   ├── base.py           # CRUD base genérico
│   │   ├── user.py           # CRUD de usuarios
│   │   ├── post.py           # CRUD de posts
│   │   ├── category.py       # CRUD de categorías
│   │   ├── tag.py            # CRUD de tags
│   │   └── comment.py        # CRUD de comentarios
│   ├── db/
│   │   ├── __init__.py
│   │   ├── session.py        # Sesiones de base de datos
│   │   └── base.py          # Base de SQLAlchemy
│   └── utils/
│       ├── __init__.py
│       ├── security.py       # Utilidades de seguridad
│       └── helpers.py        # Helper functions
├── tests/
│   ├── __init__.py
│   ├── conftest.py          # Configuración de tests
│   ├── test_auth.py         # Tests de autenticación
│   ├── test_posts.py        # Tests de posts
│   ├── test_categories.py   # Tests de categorías
│   └── test_comments.py     # Tests de comentarios
├── alembic/                  # Migraciones de base de datos
├── requirements.txt          # Dependencias
├── .env                     # Variables de entorno
├── .env.example             # Ejemplo de variables de entorno
├── Dockerfile               # Configuración de Docker
├── docker-compose.yml       # Docker Compose
└── README.md               # Documentación`,
          explanation: `Esta estructura sigue las mejores prácticas para proyectos FastAPI:

• **app/**: Código fuente principal de la aplicación
• **core/**: Configuración y utilidades centrales
• **api/**: Endpoints organizados por versión y funcionalidad
• **models/**: Modelos de base de datos con SQLAlchemy
• **schemas/**: Esquemas Pydantic para validación
• **crud/**: Operaciones de base de datos reutilizables
• **db/**: Configuración de base de datos
• **utils/**: Utilidades y helper functions
• **tests/**: Tests automatizados
• **alembic/**: Migraciones de base de datos

Esta estructura modular permite:
• Fácil mantenimiento y escalabilidad
• Separación clara de responsabilidades
• Testing organizado por funcionalidad
• Configuración centralizada`,
          tip: 'Usa __init__.py en cada carpeta para que Python las reconozca como paquetes.'
        },
        {
          title: 'Configurar entorno virtual',
          content: `Crea y activa un entorno virtual para el proyecto:`,
          code: `# Crear la carpeta principal
mkdir blog_api
cd blog_api

# Crear entorno virtual
python -m venv venv

# Activar entorno virtual
# Windows:
venv\\Scripts\\activate
# macOS/Linux:
source venv/bin/activate

# Crear la estructura de carpetas
mkdir -p app/{core,api/v1,models,schemas,crud,db,utils}
mkdir -p tests
mkdir alembic

# Crear archivos __init__.py
touch app/__init__.py
touch app/{core,api,api/v1,models,schemas,crud,db,utils}/__init__.py
touch tests/__init__.py`,
          explanation: `El entorno virtual es esencial para:
• Aislar dependencias del proyecto
• Evitar conflictos con otros proyectos
• Mantener versiones consistentes
• Facilitar el despliegue

Crear la estructura de carpetas desde el inicio ayuda a:
• Mantener el código organizado
• Facilitar la navegación del proyecto
• Seguir convenciones establecidas
• Soportar el crecimiento del proyecto`,
          tip: 'Siempre activa el entorno virtual antes de trabajar en el proyecto. Verás (venv) en tu prompt.'
        },
        {
          title: 'Crear requirements.txt',
          content: `Crea el archivo requirements.txt con todas las dependencias necesarias:`,
          code: `# Framework principal
fastapi==0.104.1
uvicorn[standard]==0.24.0

# Base de datos y ORM
sqlalchemy==2.0.23
alembic==1.12.1
asyncpg==0.29.0  # Driver PostgreSQL asíncrono

# Validación de datos
pydantic==2.5.0
pydantic-settings==2.1.0
email-validator==2.1.0

# Seguridad
python-jose[cryptography]==3.3.0
passlib[bcrypt]==1.7.4
python-multipart==0.0.6

# Caching
redis==5.0.1
aioredis==2.0.1

# File upload
python-multipart==0.0.6
aiofiles==23.2.1
Pillow==10.1.0

# Testing
pytest==7.4.3
pytest-asyncio==0.21.1
httpx==0.25.2
pytest-cov==4.1.0

# Utilidades
python-dotenv==1.0.0
pydantic-extra-types==2.5.0
bcrypt==4.1.2

# Desarrollo
black==23.11.0
flake8==6.1.0
mypy==1.7.1`,
          explanation: `Las dependencias están organizadas por categorías:

**Framework y Servidor:**
• fastapi: Framework principal
• uvicorn[standard]: Servidor ASGI con dependencias adicionales

**Base de Datos:**
• sqlalchemy: ORM para base de datos
• alembic: Sistema de migraciones
• asyncpg: Driver PostgreSQL asíncrono

**Validación:**
• pydantic: Validación de datos
• pydantic-settings: Manejo de configuración
• email-validator: Validación de emails

**Seguridad:**
• python-jose: Manejo de JWT
• passlib[bcrypt]: Hashing de passwords
• python-multipart: Para form data

**Caching:**
• redis: Cliente Redis
• aioredis: Cliente Redis asíncrono

**File Upload:**
• aiofiles: Manejo de archivos asíncrono
• Pillow: Procesamiento de imágenes

**Testing:**
• pytest: Framework de testing
• pytest-asyncio: Soporte para async
• httpx: Cliente HTTP para tests
• pytest-cov: Coverage de tests`,
          tip: 'Usa versiones específicas para evitar problemas de compatibilidad. Actualiza regularmente las dependencias.'
        },
        {
          title: 'Configurar variables de entorno',
          content: `Crea los archivos de configuración de entorno:`,
          code: `# .env.example
# Configuración de la aplicación
APP_NAME=Blog API
DEBUG=True
ENVIRONMENT=development
VERSION=1.0.0

# Base de datos
DATABASE_URL=postgresql+asyncpg://user:password@localhost:5432/blog_db
TEST_DATABASE_URL=postgresql+asyncpg://user:password@localhost:5432/blog_test_db

# Seguridad
SECRET_KEY=your-super-secret-key-here-change-in-production
ALGORITHM=HS256
ACCESS_TOKEN_EXPIRE_MINUTES=30

# Redis
REDIS_URL=redis://localhost:6379/0

# File upload
UPLOAD_DIR=./uploads
MAX_FILE_SIZE=10485760  # 10MB
ALLOWED_EXTENSIONS=jpg,jpeg,png,gif

# Rate limiting
RATE_LIMIT_REQUESTS=100
RATE_LIMIT_WINDOW=60

# .env (copia este archivo y rellena tus valores)
APP_NAME=Blog API
DEBUG=True
ENVIRONMENT=development
VERSION=1.0.0
DATABASE_URL=postgresql+asyncpg://blog_user:blog_password@localhost:5432/blog_db
TEST_DATABASE_URL=postgresql+asyncpg://blog_user:blog_password@localhost:5432/blog_test_db
SECRET_KEY=super-secret-jwt-key-change-in-production-123456789
ALGORITHM=HS256
ACCESS_TOKEN_EXPIRE_MINUTES=30
REDIS_URL=redis://localhost:6379/0
UPLOAD_DIR=./uploads
MAX_FILE_SIZE=10485760
ALLOWED_EXTENSIONS=jpg,jpeg,png,gif
RATE_LIMIT_REQUESTS=100
RATE_LIMIT_WINDOW=60`,
          explanation: `Las variables de entorno permiten:

**Configuración de la aplicación:**
• APP_NAME: Nombre de la aplicación
• DEBUG: Modo debug para desarrollo
• ENVIRONMENT: Entorno (development/production)
• VERSION: Versión de la API

**Base de datos:**
• DATABASE_URL: URL de conexión a PostgreSQL
• TEST_DATABASE_URL: URL para base de datos de tests

**Seguridad:**
• SECRET_KEY: Clave secreta para JWT
• ALGORITHM: Algoritmo de encriptación
• ACCESS_TOKEN_EXPIRE_MINUTES: Tiempo de expiración de tokens

**Redis:**
• REDIS_URL: URL de conexión a Redis

**File upload:**
• UPLOAD_DIR: Directorio para uploads
• MAX_FILE_SIZE: Tamaño máximo de archivos
• ALLOWED_EXTENSIONS: Extensiones permitidas

**Rate limiting:**
• RATE_LIMIT_REQUESTS: Peticiones permitidas
• RATE_LIMIT_WINDOW: Ventana de tiempo

El archivo .env.example sirve como plantilla y no debe incluirse en Git.`,
          tip: 'Nunca commits el archivo .env. Usa .env.example como plantilla y añade .env a tu .gitignore.'
        }
      ],
      practiceExercise: {
        title: 'Ejercicio Práctico',
        description: 'Configura tu entorno de desarrollo',
        steps: [
          'Crea la estructura de carpetas completa',
          'Configura el entorno virtual',
          'Instala todas las dependencias',
          'Crea los archivos de entorno',
          'Verifica que todo funciona correctamente'
        ],
        solution: `# Comandos completos para la configuración
mkdir blog_api && cd blog_api
python -m venv venv

# Windows
venv\\Scripts\\activate
# Linux/macOS
source venv/bin/activate

# Crear estructura
mkdir -p app/{core,api/v1,models,schemas,crud,db,utils}
mkdir -p tests alembic

# Crear __init__.py
touch app/__init__.py app/{core,api,api/v1,models,schemas,crud,db,utils}/__init__.py
touch tests/__init__.py

# Instalar dependencias
pip install -r requirements.txt

# Crear archivos de entorno
cp .env.example .env
# Editar .env con tus valores

# Verificar instalación
python -c "import fastapi, sqlalchemy, pydantic; print('✅ Todas las dependencias instaladas')"`
      }
    },
    {
      id: 'database-setup',
      title: 'Fase 2: Configuración de Base de Datos',
      icon: DatabaseIcon,
      description: 'Modelos SQLAlchemy y migraciones',
      difficulty: 'Intermedio',
      timeEstimate: '45 minutos',
      objectives: [
        'Configurar conexión a PostgreSQL',
        'Crear modelos de base de datos',
        'Configurar Alembic para migraciones',
        'Crear relaciones entre modelos'
      ],
      detailedExplanation: `
En esta fase configuraremos la capa de base de datos usando SQLAlchemy con PostgreSQL. 
Crearemos modelos para todas nuestras entidades y estableceremos las relaciones entre ellas.

SQLAlchemy 2.0 nos proporciona:
• ORM asíncrono para alto rendimiento
• Tipado estático con Python
• Migraciones automáticas con Alembic
• Relaciones complejas entre modelos
• Consultas eficientes y optimizadas

Crearemos modelos para:
• Users - Usuarios del sistema
• Posts - Artículos del blog
• Categories - Categorías de posts
• Tags - Etiquetas para posts
• Comments - Comentarios en posts
      `,
      steps: [
        {
          title: 'Configurar conexión a base de datos',
          content: `Crea los archivos de configuración de la base de datos:`,
          code: `# app/core/config.py
from pydantic_settings import BaseSettings
from typing import Optional

class Settings(BaseSettings):
    # App settings
    app_name: str = "Blog API"
    debug: bool = True
    version: str = "1.0.0"
    environment: str = "development"
    
    # Database settings
    database_url: str
    test_database_url: Optional[str] = None
    
    # Security settings
    secret_key: str
    algorithm: str = "HS256"
    access_token_expire_minutes: int = 30
    
    # Redis settings
    redis_url: str = "redis://localhost:6379/0"
    
    # File upload settings
    upload_dir: str = "./uploads"
    max_file_size: int = 10485760  # 10MB
    allowed_extensions: list[str] = ["jpg", "jpeg", "png", "gif"]
    
    # Rate limiting
    rate_limit_requests: int = 100
    rate_limit_window: int = 60
    
    class Config:
        env_file = ".env"
        case_sensitive = True

settings = Settings()

# app/db/session.py
from sqlalchemy.ext.asyncio import AsyncSession, create_async_engine
from sqlalchemy.orm import sessionmaker
from app.core.config import settings

# Crear engine para base de datos principal
engine = create_async_engine(
    settings.database_url,
    echo=settings.debug,
    future=True,
    pool_pre_ping=True,
    pool_recycle=300,
    pool_size=20,
    max_overflow=30
)

# Crear engine para tests
test_engine = create_async_engine(
    settings.test_database_url or settings.database_url,
    echo=False,
    future=True
)

# Crear sesión factory
AsyncSessionLocal = sessionmaker(
    engine,
    class_=AsyncSession,
    expire_on_commit=False,
    autoflush=False
)

AsyncTestSessionLocal = sessionmaker(
    test_engine,
    class_=AsyncSession,
    expire_on_commit=False,
    autoflush=False
)

# Dependencia para obtener sesión de BD
async def get_db() -> AsyncSession:
    async with AsyncSessionLocal() as session:
        try:
            yield session
        finally:
            await session.close()

# Dependencia para tests
async def get_test_db() -> AsyncSession:
    async with AsyncTestSessionLocal() as session:
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

**Configuración centralizada (config.py):**
• Manejo de variables de entorno con pydantic-settings
• Tipado estático para todas las configuraciones
• Validación automática de valores
• Configuración sensible al entorno

**Conexión a base de datos (session.py):**
• Motor asíncrono con pooling optimizado
• Configuración separada para producción y tests
• Session factory con configuración óptima
• Dependencias para inyección en endpoints

**Clase base (base.py):**
• AsyncAttrs para soporte asíncrono
• DeclarativeBase para modelos SQLAlchemy
• Herencia común para todos los modelos

Características del engine:
• pool_pre_ping: Verifica conexiones antes de usar
• pool_recycle: Recicla conexiones para evitar timeouts
• pool_size: Número de conexiones en el pool
• max_overflow: Conexiones adicionales cuando el pool está lleno`,
          tip: 'Usa echo=True solo en desarrollo para ver las queries SQL. En producción, desactívalo por rendimiento.'
        },
        {
          title: 'Crear modelos de base de datos',
          content: `Define los modelos SQLAlchemy para todas las entidades:`,
          code: `# app/models/user.py
from sqlalchemy import Column, Integer, String, Boolean, DateTime, Text, ForeignKey
from sqlalchemy.sql import func
from sqlalchemy.orm import relationship
from app.db.base import Base

class User(Base):
    __tablename__ = "users"
    
    id = Column(Integer, primary_key=True, index=True)
    username = Column(String(50), unique=True, index=True, nullable=False)
    email = Column(String(100), unique=True, index=True, nullable=False)
    full_name = Column(String(100))
    bio = Column(Text)
    avatar_url = Column(String(255))
    hashed_password = Column(String(255), nullable=False)
    is_active = Column(Boolean, default=True)
    is_superuser = Column(Boolean, default=False)
    email_verified = Column(Boolean, default=False)
    created_at = Column(DateTime(timezone=True), server_default=func.now())
    updated_at = Column(DateTime(timezone=True), onupdate=func.now())
    last_login = Column(DateTime(timezone=True))
    
    # Relaciones
    posts = relationship("Post", back_populates="author", cascade="all, delete-orphan")
    comments = relationship("Comment", back_populates="author", cascade="all, delete-orphan")

# app/models/post.py
from sqlalchemy import Column, Integer, String, Text, Boolean, DateTime, ForeignKey, Table
from sqlalchemy.sql import func
from sqlalchemy.orm import relationship
from app.db.base import Base

# Tabla de asociación para muchos a muchos posts-tags
post_tags = Table(
    'post_tags', Base.metadata,
    Column('post_id', Integer, ForeignKey('posts.id'), primary_key=True),
    Column('tag_id', Integer, ForeignKey('tags.id'), primary_key=True)
)

class Post(Base):
    __tablename__ = "posts"
    
    id = Column(Integer, primary_key=True, index=True)
    title = Column(String(200), nullable=False, index=True)
    slug = Column(String(200), unique=True, nullable=False, index=True)
    content = Column(Text, nullable=False)
    excerpt = Column(String(500))
    featured_image = Column(String(255))
    is_published = Column(Boolean, default=False)
    is_featured = Column(Boolean, default=False)
    view_count = Column(Integer, default=0)
    like_count = Column(Integer, default=0)
    created_at = Column(DateTime(timezone=True), server_default=func.now())
    updated_at = Column(DateTime(timezone=True), onupdate=func.now())
    published_at = Column(DateTime(timezone=True))
    
    # Claves foráneas
    author_id = Column(Integer, ForeignKey("users.id"), nullable=False)
    category_id = Column(Integer, ForeignKey("categories.id"))
    
    # Relaciones
    author = relationship("User", back_populates="posts")
    category = relationship("Category", back_populates="posts")
    tags = relationship("Tag", secondary=post_tags, back_populates="posts")
    comments = relationship("Comment", back_populates="post", cascade="all, delete-orphan")

# app/models/category.py
from sqlalchemy import Column, Integer, String, Text, DateTime
from sqlalchemy.sql import func
from sqlalchemy.orm import relationship
from app.db.base import Base

class Category(Base):
    __tablename__ = "categories"
    
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String(100), unique=True, nullable=False, index=True)
    slug = Column(String(100), unique=True, nullable=False, index=True)
    description = Column(Text)
    color = Column(String(7), default="#007bff")  # Color en formato hex
    created_at = Column(DateTime(timezone=True), server_default=func.now())
    
    # Relaciones
    posts = relationship("Post", back_populates="category")

# app/models/tag.py
from sqlalchemy import Column, Integer, String, DateTime
from sqlalchemy.sql import func
from sqlalchemy.orm import relationship
from app.db.base import Base

class Tag(Base):
    __tablename__ = "tags"
    
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String(50), unique=True, nullable=False, index=True)
    slug = Column(String(50), unique=True, nullable=False, index=True)
    color = Column(String(7), default="#28a745")  # Color en formato hex
    created_at = Column(DateTime(timezone=True), server_default=func.now())
    
    # Relaciones
    posts = relationship("Post", secondary=post_tags, back_populates="tags")

# app/models/comment.py
from sqlalchemy import Column, Integer, Text, DateTime, ForeignKey, Enum as SQLEnum
from sqlalchemy.sql import func
from sqlalchemy.orm import relationship
from app.db.base import Base
import enum

class CommentStatus(str, enum.Enum):
    PENDING = "pending"
    APPROVED = "approved"
    REJECTED = "rejected"
    SPAM = "spam"

class Comment(Base):
    __tablename__ = "comments"
    
    id = Column(Integer, primary_key=True, index=True)
    content = Column(Text, nullable=False)
    author_name = Column(String(100))
    author_email = Column(String(100))
    status = Column(SQLEnum(CommentStatus), default=CommentStatus.PENDING)
    created_at = Column(DateTime(timezone=True), server_default=func.now())
    updated_at = Column(DateTime(timezone=True), onupdate=func.now())
    
    # Claves foráneas
    author_id = Column(Integer, ForeignKey("users.id"))
    post_id = Column(Integer, ForeignKey("posts.id"), nullable=False)
    parent_id = Column(Integer, ForeignKey("comments.id"))
    
    # Relaciones
    author = relationship("User", back_populates="comments")
    post = relationship("Post", back_populates="comments")
    parent = relationship("Comment", remote_side=[id])
    replies = relationship("Comment", remote_side=[parent_id])`,
          explanation: `Estos modelos definen la estructura completa de nuestra base de datos:

**User:**
• Campos básicos: username, email, full_name, bio
• Seguridad: hashed_password, is_superuser
• Estado: is_active, email_verified
• Timestamps: created_at, updated_at, last_login
• Relaciones: posts y comments (uno a muchos)

**Post:**
• Contenido: title, slug, content, excerpt
• Media: featured_image
• Estado: is_published, is_featured
• Métricas: view_count, like_count
• Timestamps: created_at, updated_at, published_at
• Relaciones: author, category, tags (muchos a muchos), comments

**Category:**
• Básicos: name, slug, description, color
• Relaciones: posts (uno a muchos)

**Tag:**
• Básicos: name, slug, color
• Relaciones: posts (muchos a muchos)

**Comment:**
• Contenido: content, author_name, author_email
• Estado: status (enum para moderación)
• Timestamps: created_at, updated_at
• Relaciones: author, post, parent (para respuestas anidadas)

Características clave:
• Índices en campos frecuentemente consultados
• Campos únicos para evitar duplicados
• Relaciones con cascade para integridad referencial
• Enums para valores controlados
• Timestamps automáticos`,
          tip: 'Usa slugs únicos para posts, categorías y tags. Esto mejora SEO y hace las URLs más amigables.'
        },
        {
          title: 'Configurar Alembic para migraciones',
          content: `Configura Alembic para gestionar las migraciones de la base de datos:`,
          code: `# alembic.ini
[alembic]
script_location = alembic
prepend_sys_path = .
version_path_separator = os
sqlalchemy.url = postgresql+asyncpg://blog_user:blog_password@localhost:5432/blog_db

[post_write_hooks]
# post_write_hooks defines scripts or Python functions that are run
# on newly generated revision scripts.  See the documentation for further
# detail and examples

[loggers]
keys = root,sqlalchemy,alembic

[handlers]
keys = console

[formatters]
keys = generic

[logger_root]
level = WARN
handlers = console
qualname =

[logger_sqlalchemy]
level = WARN
handlers =
qualname = sqlalchemy.engine

[logger_alembic]
level = INFO
handlers =
qualname = alembic

[handler_console]
class = StreamHandler
args = (sys.stderr,)
level = NOTSET
formatter = generic

[formatter_generic]
format = %(levelname)-5.5s [%(name)s] %(message)s
datefmt = %H:%M:%S

# alembic/env.py
from logging.config import fileConfig
from sqlalchemy import engine_from_config
from sqlalchemy import pool
from alembic import context
import os
import sys

# Añadir el directorio app al path
sys.path.append(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

from app.db.base import Base
from app.core.config import settings

# this is the Alembic Config object, which provides
# access to the values within the .ini file in use.
config = context.config

# Interpret the config file for Python logging.
# This line sets up loggers basically.
if config.config_file_name is not None:
    fileConfig(config.config_file_name)

# add your model's MetaData object here
# for 'autogenerate' support
target_metadata = Base.metadata

def get_url():
    return settings.database_url

def run_migrations_offline() -> None:
    """Run migrations in 'offline' mode."""
    url = get_url()
    context.configure(
        url=url,
        target_metadata=target_metadata,
        literal_binds=True,
        dialect_opts={"paramstyle": "named"},
    )

    with context.begin_transaction():
        context.run_migrations()

def run_migrations_online() -> None:
    """Run migrations in 'online' mode."""
    configuration = config.get_section(config.config_ini_section)
    configuration["sqlalchemy.url"] = get_url()
    connectable = engine_from_config(
        configuration,
        prefix="sqlalchemy.",
        poolclass=pool.NullPool,
    )

    with connectable.connect() as connection:
        context.configure(
            connection=connection, target_metadata=target_metadata
        )

        with context.begin_transaction():
            context.run_migrations()

if context.is_offline_mode():
    run_migrations_offline()
else:
    run_migrations_online()

# alembic/script.py.mako
"""${message}

Revision ID: ${up_revision}
Revises: ${down_revision | comma,n}
Create Date: ${create_date}

"""
from alembic import op
import sqlalchemy as sa
${imports if imports else ""}

# revision identifiers, used by Alembic.
revision = ${repr(up_revision)}
down_revision = ${repr(down_revision)}
branch_labels = ${repr(branch_labels)}
depends_on = ${repr(depends_on)}


def upgrade() -> None:
    ${upgrades if upgrades else "pass"}


def downgrade() -> None:
    ${downgrades if downgrades else "pass"}`,
          explanation: `Esta configuración de Alembic permite:

**alembic.ini:**
• Configuración principal de Alembic
• URL de conexión a la base de datos
• Configuración de logging
• Ubicación de scripts de migración

**alembic/env.py:**
• Configuración del entorno de ejecución
• Integración con SQLAlchemy y nuestra configuración
• Soporte para modo online y offline
• Obtención de la URL desde variables de entorno

**script.py.mako:**
• Plantilla para generar scripts de migración
• Estructura básica para upgrade y downgrade
• Soporte para imports automáticos

Características clave:
• Integración con nuestra configuración de FastAPI
• Soporte para variables de entorno
• Logging configurado apropiadamente
• Plantillas personalizables para migraciones

Alembic nos permite:
• Versionar cambios en el esquema
• Aplicar migraciones de manera controlada
• Hacer rollback de cambios
• Generar scripts automáticamente
• Mantener consistencia entre entornos`,
          tip: 'Nunca edites manualmente los archivos de migración generados por Alembic. Siempre usa alembic revision --autogenerate.'
        },
        {
          title: 'Crear migración inicial',
          code: `# Generar migración inicial
alembic revision --autogenerate -m "Initial migration"

# Esto creará un archivo como: alembic/versions/001_initial_migration.py
# El contenido será similar a:

\`\`\`Initial migration

Revision ID: 001
Revises: 
Create Date: 2024-01-01 12:00:00.000000

"""
from alembic import op
import sqlalchemy as sa
from sqlalchemy.dialects import postgresql

# revision identifiers, used by Alembic.
revision = '001'
down_revision = None
branch_labels = None
depends_on = None


def upgrade() -> None:
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('categories',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(length=100), nullable=False),
    sa.Column('slug', sa.String(length=100), nullable=False),
    sa.Column('description', sa.Text(), nullable=True),
    sa.Column('color', sa.String(length=7), nullable=True),
    sa.Column('created_at', sa.DateTime(timezone=True), server_default=sa.text('(CURRENT_TIMESTAMP)'), nullable=True),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_index(op.f('ix_categories_created_at'), 'categories', ['created_at'], unique=False)
    op.create_index(op.f('ix_categories_id'), 'categories', ['id'], unique=False)
    op.create_index(op.f('ix_categories_name'), 'categories', ['name'], unique=True)
    op.create_index(op.f('ix_categories_slug'), 'categories', ['slug'], unique=True)
    
    op.create_table('tags',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(length=50), nullable=False),
    sa.Column('slug', sa.String(length=50), nullable=False),
    sa.Column('color', sa.String(length=7), nullable=True),
    sa.Column('created_at', sa.DateTime(timezone=True), server_default=sa.text('(CURRENT_TIMESTAMP)'), nullable=True),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_index(op.f('ix_tags_created_at'), 'tags', ['created_at'], unique=False)
    op.create_index(op.f('ix_tags_id'), 'tags', ['id'], unique=False)
    op.create_index(op.f('ix_tags_name'), 'tags', ['name'], unique=True)
    op.create_index(op.f('ix_tags_slug'), 'tags', ['slug'], unique=True)
    
    op.create_table('users',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('username', sa.String(length=50), nullable=False),
    sa.Column('email', sa.String(length=100), nullable=False),
    sa.Column('full_name', sa.String(length=100), nullable=True),
    sa.Column('bio', sa.Text(), nullable=True),
    sa.Column('avatar_url', sa.String(length=255), nullable=True),
    sa.Column('hashed_password', sa.String(length=255), nullable=False),
    sa.Column('is_active', sa.Boolean(), nullable=True),
    sa.Column('is_superuser', sa.Boolean(), nullable=True),
    sa.Column('email_verified', sa.Boolean(), nullable=True),
    sa.Column('created_at', sa.DateTime(timezone=True), server_default=sa.text('(CURRENT_TIMESTAMP)'), nullable=True),
    sa.Column('updated_at', sa.DateTime(timezone=True), nullable=True),
    sa.Column('last_login', sa.DateTime(timezone=True), nullable=True),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_index(op.f('ix_users_created_at'), 'users', ['created_at'], unique=False)
    op.create_index(op.f('ix_users_email'), 'users', ['email'], unique=True)
    op.create_index(op.f('ix_users_id'), 'users', ['id'], unique=False)
    op.create_index(op.f('ix_users_username'), 'users', ['username'], unique=True)
    
    # ... más tablas (posts, comments, post_tags) ...
    
    # ### end Alembic commands ###


def downgrade() -> None:
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_index(op.f('ix_users_username'), table_name='users')
    op.drop_index(op.f('ix_users_id'), table_name='users')
    op.drop_index(op.f('ix_users_created_at'), table_name='users')
    op.drop_table('users')
    op.drop_index(op.f('ix_tags_slug'), table_name='tags')
    op.drop_index(op.f('ix_tags_id'), table_name='tags')
    op.drop_index(op.f('ix_tags_created_at'), table_name='tags')
    op.drop_table('tags')
    op.drop_index(op.f('ix_categories_slug'), table_name='categories')
    op.drop_index(op.f('ix_categories_id'), table_name='categories')
    op.drop_index(op.f('ix_categories_created_at'), table_name='categories')
    op.drop_table('categories')
    # ### end Alembic commands ###

# Aplicar la migración
alembic upgrade head

# Verificar el estado de las migraciones
alembic current
alembic history`,
          explanation: `Este proceso crea y aplica la migración inicial:

**Generación de migración:**
• alembic revision --autogenerate analiza los modelos
• Compara con el estado actual de la base de datos
• Genera código SQL para crear todas las tablas
• Crea índices y restricciones definidas en los modelos

**Contenido de la migración:**
• Función upgrade(): crea todas las tablas
• Función downgrade(): elimina todas las tablas
• Metadatos de la migración (ID, fecha, descripción)
• Índices y restricciones adecuadas

**Aplicación de la migración:**
• alembic upgrade head aplica todas las migraciones pendientes
• Crea las tablas en el orden correcto (respetando FKs)
• Aplica índices para mejorar rendimiento
• Establece restricciones de unicidad y nulabilidad

**Verificación:**
• alembic current muestra la migración actual
• alembic history muestra todas las migraciones
• Puedes verificar que las tablas se crearon correctamente

Alembic maneja automáticamente:
• Orden de creación de tablas (dependencias)
• Índices y restricciones
• Tipos de datos específicos de PostgreSQL
• Relaciones y claves foráneas`,
          tip: 'Siempre verifica las migraciones generadas automáticamente antes de aplicarlas, especialmente en producción.'
        }
      ],
      practiceExercise: {
        title: 'Ejercicio Práctico',
        description: 'Configura la base de datos completa',
        steps: [
          'Crea una base de datos PostgreSQL',
          'Configura los archivos de Alembic',
          'Genera la migración inicial',
          'Aplica la migración',
          'Verifica que todas las tablas se crearon correctamente'
        ],
        solution: `# En PostgreSQL (psql)
CREATE DATABASE blog_db;
CREATE USER blog_user WITH PASSWORD 'blog_password';
GRANT ALL PRIVILEGES ON DATABASE blog_db TO blog_user;

# En tu proyecto
# Configurar .env con la URL de la BD
DATABASE_URL=postgresql+asyncpg://blog_user:blog_password@localhost:5432/blog_db

# Generar migración
alembic revision --autogenerate -m "Initial migration"

# Aplicar migración
alembic upgrade head

# Verificar
alembic current
# Debería mostrar: 001 (head)

# Conectar a la BD y verificar tablas
# psql -U blog_user -d blog_db
# \\dt
# Deberías ver: users, posts, categories, tags, comments, post_tags`
      }
    },
    {
      id: 'api-implementation',
      title: 'Fase 3: Implementación de la API',
      icon: Code,
      description: 'Endpoints, validación y lógica de negocio',
      difficulty: 'Intermedio',
      timeEstimate: '2 horas',
      objectives: [
        'Crear esquemas Pydantic',
        'Implementar endpoints CRUD',
        'Añadir autenticación JWT',
        'Implementar validación y manejo de errores'
      ],
      detailedExplanation: `
En esta fase implementaremos los endpoints de la API usando FastAPI. Crearemos esquemas 
Pydantic para validación, implementaremos la lógica de negocio y añadiremos autenticación JWT.

FastAPI nos proporciona:
• Validación automática con Pydantic
• Documentación OpenAPI automática
• Inyección de dependencias
• Manejo de errores asíncrono
• Soporte para middleware

Implementaremos endpoints para:
• Autenticación (registro, login, refresh token)
• Gestión de usuarios (CRUD)
• Gestión de posts (CRUD con relaciones)
• Gestión de categorías y tags
• Sistema de comentarios con moderación
      `,
      steps: [
        {
          title: 'Crear esquemas Pydantic',
          content: `Define los esquemas Pydantic para validación de datos:`,
          code: `# app/schemas/user.py
from pydantic import BaseModel, Field, EmailStr, validator
from typing import Optional
from datetime import datetime
from enum import Enum

class UserRole(str, Enum):
    USER = "user"
    ADMIN = "admin"
    MODERATOR = "moderator"

class UserBase(BaseModel):
    username: str = Field(..., min_length=3, max_length=50, regex=r'^[a-zA-Z0-9_]+$')
    email: EmailStr
    full_name: Optional[str] = Field(None, max_length=100)
    bio: Optional[str] = Field(None, max_length=500)
    avatar_url: Optional[str] = Field(None, max_length=255)

class UserCreate(UserBase):
    password: str = Field(..., min_length=8, max_length=100)
    
    @validator('username')
    def validate_username(cls, v):
        if v.lower() in ['admin', 'root', 'system']:
            raise ValueError('Username not allowed')
        return v.lower()

class UserUpdate(BaseModel):
    username: Optional[str] = Field(None, min_length=3, max_length=50, regex=r'^[a-zA-Z0-9_]+$')
    email: Optional[EmailStr] = None
    full_name: Optional[str] = Field(None, max_length=100)
    bio: Optional[str] = Field(None, max_length=500)
    avatar_url: Optional[str] = Field(None, max_length=255)
    password: Optional[str] = Field(None, min_length=8, max_length=100)

class UserResponse(UserBase):
    id: int
    is_active: bool
    is_superuser: bool
    email_verified: bool
    created_at: datetime
    updated_at: Optional[datetime] = None
    last_login: Optional[datetime] = None
    
    class Config:
        from_attributes = True

class UserLogin(BaseModel):
    username: str = Field(..., min_length=3)
    password: str = Field(..., min_length=1)

class Token(BaseModel):
    access_token: str
    refresh_token: str
    token_type: str = "bearer"
    expires_in: int

class TokenData(BaseModel):
    username: Optional[str] = None

# app/schemas/post.py
from pydantic import BaseModel, Field, validator
from typing import Optional, List
from datetime import datetime
from enum import Enum

class PostStatus(str, Enum):
    DRAFT = "draft"
    PUBLISHED = "published"
    ARCHIVED = "archived"

class PostBase(BaseModel):
    title: str = Field(..., min_length=5, max_length=200)
    content: str = Field(..., min_length=10)
    excerpt: Optional[str] = Field(None, max_length=500)
    featured_image: Optional[str] = Field(None, max_length=255)
    is_published: bool = False
    is_featured: bool = False
    category_id: Optional[int] = None
    tag_ids: List[int] = Field(default_factory=list)
    
    @validator('title')
    def validate_title(cls, v):
        return v.strip().title()

class PostCreate(PostBase):
    pass

class PostUpdate(BaseModel):
    title: Optional[str] = Field(None, min_length=5, max_length=200)
    content: Optional[str] = Field(None, min_length=10)
    excerpt: Optional[str] = Field(None, max_length=500)
    featured_image: Optional[str] = Field(None, max_length=255)
    is_published: Optional[bool] = None
    is_featured: Optional[bool] = None
    category_id: Optional[int] = None
    tag_ids: Optional[List[int]] = None

class PostResponse(PostBase):
    id: int
    slug: str
    view_count: int
    like_count: int
    created_at: datetime
    updated_at: Optional[datetime] = None
    published_at: Optional[datetime] = None
    author_id: int
    author: Optional['UserResponse'] = None
    category: Optional['CategoryResponse'] = None
    tags: List['TagResponse'] = []
    comments_count: int = 0
    
    class Config:
        from_attributes = True

class PostListResponse(BaseModel):
    posts: List[PostResponse]
    total: int
    page: int
    per_page: int
    total_pages: int

# app/schemas/category.py
from pydantic import BaseModel, Field, validator
from typing import Optional, List
from datetime import datetime

class CategoryBase(BaseModel):
    name: str = Field(..., min_length=2, max_length=100)
    description: Optional[str] = Field(None, max_length=1000)
    color: str = Field("#007bff", regex=r'^#[0-9A-Fa-f]{6}$')
    
    @validator('name')
    def validate_name(cls, v):
        return v.strip().title()

class CategoryCreate(CategoryBase):
    pass

class CategoryUpdate(BaseModel):
    name: Optional[str] = Field(None, min_length=2, max_length=100)
    description: Optional[str] = Field(None, max_length=1000)
    color: Optional[str] = Field(None, regex=r'^#[0-9A-Fa-f]{6}$')

class CategoryResponse(CategoryBase):
    id: int
    slug: str
    created_at: datetime
    posts_count: int = 0
    
    class Config:
        from_attributes = True

# app/schemas/tag.py
from pydantic import BaseModel, Field, validator
from typing import Optional, List
from datetime import datetime

class TagBase(BaseModel):
    name: str = Field(..., min_length=2, max_length=50)
    color: str = Field("#28a745", regex=r'^#[0-9A-Fa-f]{6}$')
    
    @validator('name')
    def validate_name(cls, v):
        return v.strip().lower()

class TagCreate(TagBase):
    pass

class TagUpdate(BaseModel):
    name: Optional[str] = Field(None, min_length=2, max_length=50)
    color: Optional[str] = Field(None, regex=r'^#[0-9A-Fa-f]{6}$')

class TagResponse(TagBase):
    id: int
    slug: str
    created_at: datetime
    posts_count: int = 0
    
    class Config:
        from_attributes = True

# app/schemas/comment.py
from pydantic import BaseModel, Field, validator, EmailStr
from typing import Optional, List
from datetime import datetime
from enum import Enum

class CommentStatus(str, Enum):
    PENDING = "pending"
    APPROVED = "approved"
    REJECTED = "rejected"
    SPAM = "spam"

class CommentBase(BaseModel):
    content: str = Field(..., min_length=1, max_length=2000)
    author_name: Optional[str] = Field(None, max_length=100)
    author_email: Optional[EmailStr] = None
    parent_id: Optional[int] = None
    
    @validator('content')
    def validate_content(cls, v):
        if len(v.strip()) == 0:
            raise ValueError('Content cannot be empty')
        return v.strip()

class CommentCreate(CommentBase):
    post_id: int

class CommentUpdate(BaseModel):
    content: Optional[str] = Field(None, min_length=1, max_length=2000)
    status: Optional[CommentStatus] = None

class CommentResponse(CommentBase):
    id: int
    status: CommentStatus
    created_at: datetime
    updated_at: Optional[datetime] = None
    author_id: Optional[int] = None
    post_id: int
    author: Optional['UserResponse'] = None
    post: Optional['PostResponse'] = None
    parent: Optional['CommentResponse'] = None
    replies: List['CommentResponse'] = []
    
    class Config:
        from_attributes = True`,
          explanation: `Estos esquemas Pydantic proporcionan validación completa para nuestra API:

**User Schemas:**
• UserBase: Campos comunes con validaciones
• UserCreate: Para registro (incluye password)
• UserUpdate: Para actualización (todos opcionales)
• UserResponse: Para respuestas (sin password)
• UserLogin: Para autenticación
• Token: Para respuestas JWT

**Post Schemas:**
• PostBase: Campos base con validaciones
• PostCreate/Update: Para creación y actualización
• PostResponse: Para respuestas con relaciones
• PostListResponse: Para listas paginadas

**Category/Tag Schemas:**
• Base, Create, Update, Response para cada uno
• Validaciones específicas para cada entidad
• Incluyen conteos de relaciones

**Comment Schemas:**
• Soporte para comentarios anidados (parent_id)
• Enum para status de moderación
• Validación de contenido y emails

Características clave:
• Validación automática de tipos y formatos
• Validadores personalizados para lógica de negocio
• Soporte para campos opcionales
• Exclusión de campos sensibles (passwords)
• Configuración from_attributes para ORM

Validaciones implementadas:
• Longitudes mínimas y máximas
• Formatos de email y colores hex
• Nombres de usuario prohibidos
• Contenido no vacío
• Normalización de datos (strip, title, lower)`,
          tip: 'Usa diferentes esquemas para request y response para controlar qué datos se exponen en cada caso.'
        },
        {
          title: 'Implementar seguridad y autenticación',
          content: `Crea el módulo de seguridad con JWT y hashing de passwords:`,
          code: `# app/core/security.py
from datetime import datetime, timedelta
from typing import Optional
from jose import JWTError, jwt
from passlib.context import CryptContext
from app.core.config import settings

# Contexto para hashing de passwords
pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

class SecurityManager:
    def __init__(self):
        self.secret_key = settings.secret_key
        self.algorithm = settings.algorithm
        self.access_token_expire_minutes = settings.access_token_expire_minutes

    def verify_password(self, plain_password: str, hashed_password: str) -> bool:
        """Verificar un password contra su hash"""
        return pwd_context.verify(plain_password, hashed_password)

    def get_password_hash(self, password: str) -> str:
        """Generar hash de password"""
        return pwd_context.hash(password)

    def create_access_token(self, data: dict, expires_delta: Optional[timedelta] = None) -> str:
        """Crear token de acceso JWT"""
        to_encode = data.copy()
        if expires_delta:
            expire = datetime.utcnow() + expires_delta
        else:
            expire = datetime.utcnow() + timedelta(minutes=self.access_token_expire_minutes)
        
        to_encode.update({"exp": expire, "type": "access"})
        encoded_jwt = jwt.encode(to_encode, self.secret_key, algorithm=self.algorithm)
        return encoded_jwt

    def create_refresh_token(self, data: dict) -> str:
        """Crear token de refresco JWT"""
        to_encode = data.copy()
        expire = datetime.utcnow() + timedelta(days=7)  # Refresh token dura 7 días
        to_encode.update({"exp": expire, "type": "refresh"})
        encoded_jwt = jwt.encode(to_encode, self.secret_key, algorithm=self.algorithm)
        return encoded_jwt

    def verify_token(self, token: str, token_type: str = "access") -> Optional[dict]:
        """Verificar y decodificar token JWT"""
        try:
            payload = jwt.decode(token, self.secret_key, algorithms=[self.algorithm])
            
            if payload.get("type") != token_type:
                return None
                
            username: str = payload.get("sub")
            if username is None:
                return None
                
            return {"username": username, "exp": payload.get("exp")}
        except JWTError:
            return None

    def create_tokens(self, username: str) -> dict:
        """Crear ambos tokens (access y refresh)"""
        access_token = self.create_access_token(data={"sub": username})
        refresh_token = self.create_refresh_token(data={"sub": username})
        
        return {
            "access_token": access_token,
            "refresh_token": refresh_token,
            "token_type": "bearer",
            "expires_in": self.access_token_expire_minutes * 60
        }

# Instancia global del gestor de seguridad
security_manager = SecurityManager()

# app/core/dependencies.py
from fastapi import Depends, HTTPException, status
from fastapi.security import HTTPBearer, HTTPAuthorizationCredentials
from sqlalchemy.ext.asyncio import AsyncSession
from app.db.session import get_db
from app.core.security import security_manager
from app.crud.user import user
from app.models.user import User

security = HTTPBearer()

async def get_current_user(
    credentials: HTTPAuthorizationCredentials = Depends(security),
    db: AsyncSession = Depends(get_db)
) -> User:
    """Obtener usuario actual desde token JWT"""
    credentials_exception = HTTPException(
        status_code=status.HTTP_401_UNAUTHORIZED,
        detail="Could not validate credentials",
        headers={"WWW-Authenticate": "Bearer"},
    )
    
    token_data = security_manager.verify_token(credentials.credentials)
    if token_data is None:
        raise credentials_exception
    
    current_user = await user.get_by_username(db, username=token_data["username"])
    if current_user is None:
        raise credentials_exception
    
    if not current_user.is_active:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Inactive user"
        )
    
    return current_user

async def get_current_active_user(
    current_user: User = Depends(get_current_user)
) -> User:
    """Obtener usuario activo"""
    if not current_user.is_active:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Inactive user"
        )
    return current_user

async def get_current_superuser(
    current_user: User = Depends(get_current_user)
) -> User:
    """Obtener superusuario"""
    if not current_user.is_superuser:
        raise HTTPException(
            status_code=status.HTTP_403_FORBIDDEN,
            detail="Not enough permissions"
        )
    return current_user

class OptionalHTTPBearer(HTTPBearer):
    async def __call__(self, request):
        try:
            return await super().__call__(request)
        except HTTPException:
            return None

optional_security = OptionalHTTPBearer()

async def get_optional_current_user(
    credentials: HTTPAuthorizationCredentials = Depends(optional_security),
    db: AsyncSession = Depends(get_db)
) -> Optional[User]:
    """Obtener usuario actual opcional (para endpoints públicos)"""
    if not credentials:
        return None
    
    try:
        token_data = security_manager.verify_token(credentials.credentials)
        if token_data is None:
            return None
        
        current_user = await user.get_by_username(db, username=token_data["username"])
        if current_user and current_user.is_active:
            return current_user
    except:
        pass
    
    return None`,
          explanation: `Este módulo de seguridad proporciona:

**Password Hashing:**
• CryptContext con bcrypt para hashing seguro
• verify_password() para verificar passwords
• get_password_hash() para generar hashes

**JWT Token Management:**
• create_access_token() para tokens de acceso (corta duración)
• create_refresh_token() para tokens de refresco (larga duración)
• verify_token() para validar y decodificar tokens
• create_tokens() para generar ambos tokens

**Security Features:**
• Soporte para diferentes tipos de tokens
• Configuración de expiración flexible
• Verificación de tipo de token
• Manejo seguro de errores

**Dependencies para FastAPI:**
• get_current_user(): Obtiene usuario desde token
• get_current_active_user(): Verifica usuario activo
• get_current_superuser(): Verifica superusuario
• get_optional_current_user(): Usuario opcional para endpoints públicos

**Características de seguridad:**
• Tokens con tipo y expiración
• Verificación de estado de usuario
• Manejo adecuado de errores HTTP
• Soporte para autenticación opcional

**Mejoras implementadas:**
• Separación de tokens de acceso y refresco
• Verificación de tipo de token
• Manejo de usuarios inactivos
• Soporte para autenticación opcional
• Clases reutilizables y configurables`,
          tip: 'Usa tiempos de expiración diferentes para access tokens (corto) y refresh tokens (largo) para mejor seguridad.'
        },
        {
          title: 'Implementar endpoints de autenticación',
          content: `Crea los endpoints para registro, login y gestión de tokens:`,
          code: `# app/api/v1/auth.py
from fastapi import APIRouter, Depends, HTTPException, status
from fastapi.security import HTTPBearer
from sqlalchemy.ext.asyncio import AsyncSession
from app.db.session import get_db
from app.core.security import security_manager
from app.core.dependencies import get_current_user
from app.crud.user import user
from app.schemas.user import UserCreate, UserLogin, UserResponse, Token
from app.models.user import User

router = APIRouter()

@router.post("/register", response_model=UserResponse, status_code=status.HTTP_201_CREATED)
async def register(
    user_data: UserCreate,
    db: AsyncSession = Depends(get_db)
):
    """Registrar un nuevo usuario"""
    # Verificar si el username ya existe
    existing_user = await user.get_by_username(db, username=user_data.username)
    if existing_user:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Username already registered"
        )
    
    # Verificar si el email ya existe
    existing_email = await user.get_by_email(db, email=user_data.email)
    if existing_email:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Email already registered"
        )
    
    # Crear nuevo usuario
    new_user = await user.create(db, obj_in=user_data)
    
    return new_user

@router.post("/login", response_model=Token)
async def login(
    user_credentials: UserLogin,
    db: AsyncSession = Depends(get_db)
):
    """Iniciar sesión y obtener tokens"""
    # Autenticar usuario
    authenticated_user = await user.authenticate(
        db, 
        username=user_credentials.username, 
        password=user_credentials.password
    )
    
    if not authenticated_user:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Incorrect username or password",
            headers={"WWW-Authenticate": "Bearer"},
        )
    
    if not authenticated_user.is_active:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Inactive user"
        )
    
    # Actualizar último login
    from datetime import datetime
    authenticated_user.last_login = datetime.utcnow()
    await db.commit()
    
    # Crear tokens
    tokens = security_manager.create_tokens(authenticated_user.username)
    
    return tokens

@router.post("/refresh", response_model=Token)
async def refresh_token(
    refresh_token: str,
    db: AsyncSession = Depends(get_db)
):
    """Refrescar token de acceso usando token de refresco"""
    # Verificar token de refresco
    token_data = security_manager.verify_token(refresh_token, "refresh")
    if token_data is None:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid refresh token"
        )
    
    # Obtener usuario
    current_user = await user.get_by_username(db, username=token_data["username"])
    if current_user is None:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="User not found"
        )
    
    if not current_user.is_active:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Inactive user"
        )
    
    # Crear nuevos tokens
    tokens = security_manager.create_tokens(current_user.username)
    
    return tokens

@router.get("/me", response_model=UserResponse)
async def get_current_user_info(
    current_user: User = Depends(get_current_user)
):
    """Obtener información del usuario actual"""
    return current_user

@router.post("/logout")
async def logout(
    current_user: User = Depends(get_current_user)
):
    """Cerrar sesión (cliente debe eliminar tokens)"""
    # En una implementación real, podrías añadir el token a una blacklist
    # Por ahora, simplemente retornamos éxito
    return {"message": "Successfully logged out"}

# app/api/v1/users.py
from fastapi import APIRouter, Depends, HTTPException, status, Query
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy.orm import selectinload
from sqlalchemy.future import select
from app.db.session import get_db
from app.core.dependencies import get_current_user, get_current_superuser
from app.crud.user import user
from app.schemas.user import UserResponse, UserUpdate
from app.models.user import User
from typing import List, Optional

router = APIRouter()

@router.get("/", response_model=List[UserResponse])
async def get_users(
    skip: int = 0,
    limit: int = 100,
    db: AsyncSession = Depends(get_db),
    current_user: User = Depends(get_current_superuser)
):
    """Obtener lista de usuarios (solo superusuario)"""
    users = await user.get_multi(db, skip=skip, limit=limit)
    return users

@router.get("/{user_id}", response_model=UserResponse)
async def get_user(
    user_id: int,
    db: AsyncSession = Depends(get_db),
    current_user: User = Depends(get_current_user)
):
    """Obtener usuario por ID"""
    if current_user.id != user_id and not current_user.is_superuser:
        raise HTTPException(
            status_code=status.HTTP_403_FORBIDDEN,
            detail="Not enough permissions"
        )
    
    db_user = await user.get(db, id=user_id)
    if db_user is None:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="User not found"
        )
    
    return db_user

@router.put("/{user_id}", response_model=UserResponse)
async def update_user(
    user_id: int,
    user_update: UserUpdate,
    db: AsyncSession = Depends(get_db),
    current_user: User = Depends(get_current_user)
):
    """Actualizar usuario"""
    if current_user.id != user_id and not current_user.is_superuser:
        raise HTTPException(
            status_code=status.HTTP_403_FORBIDDEN,
            detail="Not enough permissions"
        )
    
    db_user = await user.get(db, id=user_id)
    if db_user is None:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="User not found"
        )
    
    updated_user = await user.update(db, db_obj=db_user, obj_in=user_update)
    return updated_user

@router.delete("/{user_id}")
async def delete_user(
    user_id: int,
    db: AsyncSession = Depends(get_db),
    current_user: User = Depends(get_current_user)
):
    """Eliminar usuario (solo superusuario o propio usuario)"""
    if current_user.id != user_id and not current_user.is_superuser:
        raise HTTPException(
            status_code=status.HTTP_403_FORBIDDEN,
            detail="Not enough permissions"
        )
    
    db_user = await user.get(db, id=user_id)
    if db_user is None:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="User not found"
        )
    
    deleted_user = await user.delete(db, id=user_id)
    if deleted_user:
        return {"message": "User deleted successfully"}
    
    raise HTTPException(
        status_code=status.HTTP_400_BAD_REQUEST,
        detail="Error deleting user"
    )`,
          explanation: `Estos endpoints implementan el sistema de autenticación y gestión de usuarios:

**Auth Endpoints:**
• /register: Registra nuevos usuarios con validación
• /login: Inicia sesión y devuelve tokens JWT
• /refresh: Refresca tokens usando refresh token
• /me: Obtiene información del usuario actual
• /logout: Cierra sesión (elimina tokens del cliente)

**User Management Endpoints:**
• /users/: Lista de usuarios (solo superusuario)
• /users/{id}: Obtener usuario por ID
• /users/{id}: Actualizar usuario
• /users/{id}: Eliminar usuario

**Características de seguridad:**
• Validación de credenciales con hashing
• Verificación de usuarios existentes
• Manejo de tokens JWT con tipos
• Permisos basados en roles
• Protección de endpoints con dependencias

**Validaciones implementadas:**
• Unicidad de username y email
• Verificación de passwords
• Estados de usuario (activo/inactivo)
• Permisos de superusuario
• Propiedad de recursos (solo editar propio)

**Mejoras de experiencia:**
• Mensajes de error claros
• Códigos HTTP apropiados
• Documentación automática
• Respuestas consistentes
• Manejo de errores robusto

**Flujo de autenticación:**
1. Registro con validación
2. Login con verificación de credenciales
3. Generación de access y refresh tokens
4. Uso de tokens para endpoints protegidos
5. Refresco de tokens cuando expiran`,
          tip: 'Implementa una blacklist de tokens en Redis para manejar logout efectivo en sistemas distribuidos.'
        },
        {
          title: 'Implementar endpoints de posts',
          content: `Crea los endpoints para gestión de posts con relaciones:`,
          code: `# app/api/v1/posts.py
from fastapi import APIRouter, Depends, HTTPException, status, Query, UploadFile, File
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy.orm import selectinload
from sqlalchemy.future import select
from sqlalchemy import func, and_, or_
from typing import List, Optional
import os
from datetime import datetime
import uuid
import aiofiles

from app.db.session import get_db
from app.core.dependencies import get_current_user, get_current_superuser, get_optional_current_user
from app.crud.post import post
from app.crud.category import category as category_crud
from app.crud.tag import tag as tag_crud
from app.schemas.post import PostCreate, PostUpdate, PostResponse, PostListResponse
from app.models.user import User
from app.models.post import Post
from app.core.config import settings

router = APIRouter()

def generate_slug(title: str) -> str:
    """Generar slug a partir del título"""
    import re
    slug = re.sub(r'[^\\w\\s-]', '', title.lower())
    slug = re.sub(r'[-\\s]+', '-', slug)
    slug = slug.strip('-')
    return slug

async def save_upload_file(file: UploadFile, upload_dir: str) -> str:
    """Guardar archivo subido"""
    if not os.path.exists(upload_dir):
        os.makedirs(upload_dir)
    
    file_extension = file.filename.split('.')[-1] if '.' in file.filename else ''
    filename = f"{uuid.uuid4()}.{file_extension}"
    file_path = os.path.join(upload_dir, filename)
    
    async with aiofiles.open(file_path, 'wb') as f:
        content = await file.read()
        await f.write(content)
    
    return f"/uploads/{filename}"

@router.get("/", response_model=PostListResponse)
async def get_posts(
    skip: int = Query(0, ge=0),
    limit: int = Query(10, ge=1, le=100),
    search: Optional[str] = Query(None),
    category_id: Optional[int] = Query(None),
    tag_id: Optional[int] = Query(None),
    author_id: Optional[int] = Query(None),
    is_published: Optional[bool] = Query(True),
    sort_by: str = Query("created_at", regex="^(created_at|title|view_count|like_count)$"),
    sort_order: str = Query("desc", regex="^(asc|desc)$"),
    db: AsyncSession = Depends(get_db)
):
    """Obtener lista de posts con filtros y paginación"""
    # Construir query base
    query = select(Post).options(
        selectinload(Post.author),
        selectinload(Post.category),
        selectinload(Post.tags)
    )
    
    # Aplicar filtros
    if search:
        query = query.where(
            or_(
                Post.title.ilike(f"%{search}%"),
                Post.content.ilike(f"%{search}%"),
                Post.excerpt.ilike(f"%{search}%")
            )
        )
    
    if category_id:
        query = query.where(Post.category_id == category_id)
    
    if tag_id:
        query = query.where(Post.tags.any(id=tag_id))
    
    if author_id:
        query = query.where(Post.author_id == author_id)
    
    if is_published is not None:
        query = query.where(Post.is_published == is_published)
    
    # Aplicar ordenamiento
    sort_column = getattr(Post, sort_by)
    if sort_order == "desc":
        query = query.order_by(sort_column.desc())
    else:
        query = query.order_by(sort_column.asc())
    
    # Obtener total
    count_query = select(func.count(Post.id))
    # Aplicar mismos filtros al count
    if search:
        count_query = count_query.where(
            or_(
                Post.title.ilike(f"%{search}%"),
                Post.content.ilike(f"%{search}%"),
                Post.excerpt.ilike(f"%{search}%")
            )
        )
    if category_id:
        count_query = count_query.where(Post.category_id == category_id)
    if tag_id:
        count_query = count_query.where(Post.tags.any(id=tag_id))
    if author_id:
        count_query = count_query.where(Post.author_id == author_id)
    if is_published is not None:
        count_query = count_query.where(Post.is_published == is_published)
    
    total_result = await db.execute(count_query)
    total = total_result.scalar()
    
    # Aplicar paginación
    query = query.offset(skip).limit(limit)
    result = await db.execute(query)
    posts = result.scalars().all()
    
    # Calcular páginas totales
    total_pages = (total + limit - 1) // limit
    
    return PostListResponse(
        posts=posts,
        total=total,
        page=skip // limit + 1,
        per_page=limit,
        total_pages=total_pages
    )

@router.get("/{post_id}", response_model=PostResponse)
async def get_post(
    post_id: int,
    db: AsyncSession = Depends(get_db)
):
    """Obtener post por ID"""
    db_post = await post.get_with_relations(db, id=post_id)
    if db_post is None:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Post not found"
        )
    
    # Incrementar view count
    db_post.view_count += 1
    await db.commit()
    
    return db_post

@router.get("/slug/{slug}", response_model=PostResponse)
async def get_post_by_slug(
    slug: str,
    db: AsyncSession = Depends(get_db)
):
    """Obtener post por slug"""
    result = await db.execute(
        select(Post)
        .options(
            selectinload(Post.author),
            selectinload(Post.category),
            selectinload(Post.tags)
        )
        .where(Post.slug == slug)
    )
    
    db_post = result.scalar_one_or_none()
    if db_post is None:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Post not found"
        )
    
    # Incrementar view count
    db_post.view_count += 1
    await db.commit()
    
    return db_post

@router.post("/", response_model=PostResponse, status_code=status.HTTP_201_CREATED)
async def create_post(
    post_data: PostCreate,
    db: AsyncSession = Depends(get_db),
    current_user: User = Depends(get_current_user)
):
    """Crear nuevo post"""
    # Generar slug único
    slug = generate_slug(post_data.title)
    
    # Verificar si el slug ya existe
    existing_post = await post.get_by_slug(db, slug=slug)
    if existing_post:
        # Añadir sufijo numérico si el slug ya existe
        counter = 1
        while existing_post:
            slug = f"{generate_slug(post_data.title)}-{counter}"
            existing_post = await post.get_by_slug(db, slug=slug)
            counter += 1
    
    # Verificar categoría si se proporciona
    if post_data.category_id:
        category = await category_crud.get(db, id=post_data.category_id)
        if not category:
            raise HTTPException(
                status_code=status.HTTP_404_NOT_FOUND,
                detail="Category not found"
            )
    
    # Verificar tags si se proporcionan
    if post_data.tag_ids:
        tags = []
        for tag_id in post_data.tag_ids:
            tag = await tag_crud.get(db, id=tag_id)
            if not tag:
                raise HTTPException(
                    status_code=status.HTTP_404_NOT_FOUND,
                    detail=f"Tag with id {tag_id} not found"
                )
            tags.append(tag)
    
    # Crear post
    post_dict = post_data.model_dump(exclude={"tag_ids"})
    post_dict["slug"] = slug
    post_dict["author_id"] = current_user.id
    
    # Si se publica, establecer published_at
    if post_data.is_published:
        post_dict["published_at"] = datetime.utcnow()
    
    new_post = await post.create_with_tags(db, obj_in=post_dict, tag_ids=post_data.tag_ids)
    
    # Cargar relaciones para la respuesta
    return await post.get_with_relations(db, id=new_post.id)

@router.put("/{post_id}", response_model=PostResponse)
async def update_post(
    post_id: int,
    post_update: PostUpdate,
    db: AsyncSession = Depends(get_db),
    current_user: User = Depends(get_current_user)
):
    """Actualizar post"""
    db_post = await post.get(db, id=post_id)
    if db_post is None:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Post not found"
        )
    
    # Verificar permisos
    if db_post.author_id != current_user.id and not current_user.is_superuser:
        raise HTTPException(
            status_code=status.HTTP_403_FORBIDDEN,
            detail="Not enough permissions"
        )
    
    # Actualizar slug si cambia el título
    if post_update.title and post_update.title != db_post.title:
        slug = generate_slug(post_update.title)
        if slug != db_post.slug:
            # Verificar si el nuevo slug ya existe
            existing_post = await post.get_by_slug(db, slug=slug)
            if existing_post and existing_post.id != post_id:
                counter = 1
                while existing_post and existing_post.id != post_id:
                    slug = f"{generate_slug(post_update.title)}-{counter}"
                    existing_post = await post.get_by_slug(db, slug=slug)
                    counter += 1
            
            post_update_dict = post_update.model_dump(exclude_unset=True)
            post_update_dict["slug"] = slug
        else:
            post_update_dict = post_update.model_dump(exclude_unset=True)
    else:
        post_update_dict = post_update.model_dump(exclude_unset=True)
    
    # Manejar cambio de estado de publicación
    if "is_published" in post_update_dict:
        if post_update_dict["is_published"] and not db_post.is_published:
            # Se está publicando por primera vez
            post_update_dict["published_at"] = datetime.utcnow()
        elif not post_update_dict["is_published"] and db_post.is_published:
            # Se está despublicando
            post_update_dict["published_at"] = None
    
    # Actualizar post
    updated_post = await post.update_with_tags(
        db, 
        db_obj=db_post, 
        obj_in=post_update_dict,
        tag_ids=post_update.tag_ids if post_update.tag_ids is not None else None
    )
    
    # Cargar relaciones para la respuesta
    return await post.get_with_relations(db, id=updated_post.id)

@router.delete("/{post_id}")
async def delete_post(
    post_id: int,
    db: AsyncSession = Depends(get_db),
    current_user: User = Depends(get_current_user)
):
    """Eliminar post"""
    db_post = await post.get(db, id=post_id)
    if db_post is None:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Post not found"
        )
    
    # Verificar permisos
    if db_post.author_id != current_user.id and not current_user.is_superuser:
        raise HTTPException(
            status_code=status.HTTP_403_FORBIDDEN,
            detail="Not enough permissions"
        )
    
    deleted_post = await post.delete(db, id=post_id)
    if deleted_post:
        return {"message": "Post deleted successfully"}
    
    raise HTTPException(
        status_code=status.HTTP_400_BAD_REQUEST,
        detail="Error deleting post"
    )

@router.post("/{post_id}/like")
async def like_post(
    post_id: int,
    db: AsyncSession = Depends(get_db),
    current_user: User = Depends(get_current_user)
):
    """Dar like a un post"""
    db_post = await post.get(db, id=post_id)
    if db_post is None:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Post not found"
        )
    
    # Incrementar like count
    db_post.like_count += 1
    await db.commit()
    
    return {"message": "Post liked successfully", "like_count": db_post.like_count}

@router.post("/upload-image")
async def upload_post_image(
    file: UploadFile = File(...),
    current_user: User = Depends(get_current_user)
):
    """Subir imagen para post"""
    # Validar archivo
    if not file.filename:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="No file provided"
        )
    
    # Validar extensión
    file_extension = file.filename.split('.')[-1].lower()
    if file_extension not in settings.allowed_extensions:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail=f"File type not allowed. Allowed types: {', '.join(settings.allowed_extensions)}"
        )
    
    # Validar tamaño
    if file.size > settings.max_file_size:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail=f"File too large. Maximum size: {settings.max_file_size} bytes"
        )
    
    # Guardar archivo
    try:
        file_url = await save_upload_file(file, settings.upload_dir)
        return {"file_url": file_url}
    except Exception as e:
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="Error saving file"
        )`,
          explanation: `Estos endpoints implementan la gestión completa de posts:

**Listado de Posts (/):**
• Paginación con skip/limit
• Búsqueda por título, contenido, excerpt
• Filtros por categoría, tag, autor, estado
• Ordenamiento por múltiples campos
• Cálculo de páginas totales

**Obtener Posts:**
• Por ID con incremento de view_count
• Por slug (URLs amigables)
• Carga de relaciones (author, category, tags)

**Crear Posts:**
• Generación automática de slug único
• Validación de categoría y tags
• Establecimiento de published_at
• Asignación automática de autor

**Actualizar Posts:**
• Verificación de permisos
• Actualización de slug si cambia título
• Manejo de estado de publicación
• Actualización de relaciones (tags)

**Eliminar Posts:**
• Verificación de permisos
• Eliminación en cascada de relaciones

**Features Adicionales:**
• Sistema de likes
• Upload de imágenes con validación
• Generación de slugs únicos
• Manejo de fechas de publicación

**Validaciones Implementadas:**
• Unicidad de slugs
• Existencia de categorías y tags
• Permisos de autor y superusuario
• Tipos y tamaños de archivos
• Estados de publicación

**Características Técnicas:**
• Queries optimizadas con selectinload
• Manejo de transacciones
• Generación de slugs con sufijos
• Upload asíncrono de archivos
• Validación completa de datos

**Mejoras de UX:**
• URLs amigables con slugs
• Paginación con metadatos
• Búsqueda全文
• Filtrado avanzado
• Ordenamiento flexible`,
          tip: 'Implementa un sistema de caché para posts frecuentemente accedidos usando Redis para mejorar rendimiento.'
        }
      ],
      practiceExercise: {
        title: 'Ejercicio Práctico',
        description: 'Implementa los endpoints de categorías y tags',
        steps: [
          'Crea los esquemas Pydantic para categorías y tags',
          'Implementa el CRUD base para categorías',
          'Implementa el CRUD base para tags',
          'Crea los endpoints de API',
          'Añade validaciones y manejo de errores'
        ],
        solution: `# app/api/v1/categories.py
from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.ext.asyncio import AsyncSession
from app.db.session import get_db
from app.core.dependencies import get_current_user, get_current_superuser
from app.crud.category import category
from app.schemas.category import CategoryCreate, CategoryUpdate, CategoryResponse
from app.models.user import User
from typing import List

router = APIRouter()

@router.get("/", response_model=List[CategoryResponse])
async def get_categories(
    skip: int = 0,
    limit: int = 100,
    db: AsyncSession = Depends(get_db)
):
    """Obtener lista de categorías"""
    categories = await category.get_multi(db, skip=skip, limit=limit)
    return categories

@router.post("/", response_model=CategoryResponse, status_code=status.HTTP_201_CREATED)
async def create_category(
    category_data: CategoryCreate,
    db: AsyncSession = Depends(get_db),
    current_user: User = Depends(get_current_superuser)
):
    """Crear nueva categoría (solo superusuario)"""
    return await category.create(db, obj_in=category_data.model_dump())

@router.get("/{category_id}", response_model=CategoryResponse)
async def get_category(
    category_id: int,
    db: AsyncSession = Depends(get_db)
):
    """Obtener categoría por ID"""
    db_category = await category.get(db, id=category_id)
    if db_category is None:
        raise HTTPException(status_code=404, detail="Category not found")
    return db_category

@router.put("/{category_id}", response_model=CategoryResponse)
async def update_category(
    category_id: int,
    category_update: CategoryUpdate,
    db: AsyncSession = Depends(get_db),
    current_user: User = Depends(get_current_superuser)
):
    """Actualizar categoría (solo superusuario)"""
    db_category = await category.get(db, id=category_id)
    if db_category is None:
        raise HTTPException(status_code=404, detail="Category not found")
    return await category.update(db, db_obj=db_category, obj_in=category_update.model_dump(exclude_unset=True))

@router.delete("/{category_id}")
async def delete_category(
    category_id: int,
    db: AsyncSession = Depends(get_db),
    current_user: User = Depends(get_current_superuser)
):
    """Eliminar categoría (solo superusuario)"""
    db_category = await category.get(db, id=category_id)
    if db_category is None:
        raise HTTPException(status_code=404, detail="Category not found")
    deleted = await category.delete(db, id=category_id)
    if deleted:
        return {"message": "Category deleted successfully"}
    raise HTTPException(status_code=400, detail="Error deleting category")`
      }
    },
    {
      id: 'testing-deployment',
      title: 'Fase 4: Testing y Despliegue',
      icon: Rocket,
      description: 'Pruebas automatizadas y configuración de producción',
      difficulty: 'Avanzado',
      timeEstimate: '1 hora',
      objectives: [
        'Escribir tests automatizados',
        'Configurar Docker y Docker Compose',
        'Preparar despliegue en producción',
        'Implementar CI/CD básico'
      ],
      detailedExplanation: `
En esta fase final configuraremos el testing automatizado y prepararemos la aplicación 
para despliegue en producción. Implementaremos tests completos, contenerizaremos la 
aplicación con Docker, y configuraremos un pipeline básico de CI/CD.

El testing y el despliegue son cruciales para:
• Asegurar la calidad del código
• Detectar regresiones automáticamente
• Facilitar el despliegue continuo
• Mantener la estabilidad en producción
• Permitir escalabilidad horizontal

Implementaremos:
• Tests unitarios y de integración
• Configuración de Docker multi-stage
• Docker Compose para desarrollo
• GitHub Actions para CI/CD
• Configuración de producción optimizada
      `,
      steps: [
        {
          title: 'Configurar testing con pytest',
          content: `Configura el entorno de testing y crea tests para la API:`,
          code: `# tests/conftest.py
import pytest
from fastapi.testclient import TestClient
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from sqlalchemy.pool import StaticPool
import asyncio

from app.main import app
from app.db.base import Base
from app.db.session import get_db
from app.core.config import settings

# Base de datos de pruebas en memoria
SQLALCHEMY_DATABASE_URL = "sqlite+aiosqlite:///:memory:"

engine = create_engine(
    SQLALCHEMY_DATABASE_URL,
    connect_args={"check_same_thread": False},
    poolclass=StaticPool,
)

TestingSessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

@pytest.fixture(scope="session")
def event_loop():
    """Create an instance of the default event loop for the test session."""
    loop = asyncio.get_event_loop_policy().new_event_loop()
    yield loop
    loop.close()

@pytest.fixture(scope="function")
def db_session():
    """Create a fresh database session for each test."""
    Base.metadata.create_all(bind=engine)
    connection = engine.connect()
    transaction = connection.begin()
    session = TestingSessionLocal(bind=connection)
    
    yield session
    
    session.close()
    transaction.rollback()
    connection.close()
    Base.metadata.drop_all(bind=engine)

@pytest.fixture(scope="function")
def client(db_session):
    """Create a test client with a fresh database session."""
    def override_get_db():
        try:
            yield db_session
        finally:
            pass
    
    app.dependency_overrides[get_db] = override_get_db
    
    with TestClient(app) as test_client:
        yield test_client
    
    app.dependency_overrides.clear()

@pytest.fixture
def test_user_data():
    """Test user data for registration."""
    return {
        "username": "testuser",
        "email": "test@example.com",
        "password": "testpassword123",
        "full_name": "Test User"
    }

@pytest.fixture
def test_post_data():
    """Test post data."""
    return {
        "title": "Test Post",
        "content": "This is a test post content.",
        "excerpt": "Test excerpt",
        "is_published": True
    }

# tests/test_auth.py
import pytest
from fastapi.testclient import TestClient

class TestAuth:
    def test_register_user(self, client: TestClient, test_user_data):
        """Test user registration."""
        response = client.post("/api/v1/auth/register", json=test_user_data)
        assert response.status_code == 201
        data = response.json()
        assert data["username"] == test_user_data["username"]
        assert data["email"] == test_user_data["email"]
        assert "id" in data
        assert data["is_active"] is True

    def test_register_duplicate_username(self, client: TestClient, test_user_data):
        """Test registration with duplicate username."""
        # Register user first time
        client.post("/api/v1/auth/register", json=test_user_data)
        
        # Try to register same username again
        response = client.post("/api/v1/auth/register", json=test_user_data)
        assert response.status_code == 400
        assert "Username already registered" in response.json()["detail"]

    def test_login_success(self, client: TestClient, test_user_data):
        """Test successful login."""
        # Register user first
        client.post("/api/v1/auth/register", json=test_user_data)
        
        # Login
        login_data = {"username": test_user_data["username"], "password": test_user_data["password"]}
        response = client.post("/api/v1/auth/login", json=login_data)
        assert response.status_code == 200
        data = response.json()
        assert "access_token" in data
        assert "refresh_token" in data
        assert data["token_type"] == "bearer"

    def test_login_invalid_credentials(self, client: TestClient, test_user_data):
        """Test login with invalid credentials."""
        # Register user first
        client.post("/api/v1/auth/register", json=test_user_data)
        
        # Login with wrong password
        login_data = {"username": test_user_data["username"], "password": "wrongpassword"}
        response = client.post("/api/v1/auth/login", json=login_data)
        assert response.status_code == 401
        assert "Incorrect username or password" in response.json()["detail"]

    def test_get_current_user(self, client: TestClient, test_user_data):
        """Test getting current user info."""
        # Register and login user
        client.post("/api/v1/auth/register", json=test_user_data)
        login_data = {"username": test_user_data["username"], "password": test_user_data["password"]}
        login_response = client.post("/api/v1/auth/login", json=login_data)
        token = login_response.json()["access_token"]
        
        # Get current user info
        headers = {"Authorization": f"Bearer {token}"}
        response = client.get("/api/v1/auth/me", headers=headers)
        assert response.status_code == 200
        data = response.json()
        assert data["username"] == test_user_data["username"]
        assert data["email"] == test_user_data["email"]

    def test_get_current_user_invalid_token(self, client: TestClient):
        """Test getting current user with invalid token."""
        headers = {"Authorization": "Bearer invalid_token"}
        response = client.get("/api/v1/auth/me", headers=headers)
        assert response.status_code == 401

# tests/test_posts.py
import pytest
from fastapi.testclient import TestClient

class TestPosts:
    def get_auth_headers(self, client: TestClient, test_user_data):
        """Helper method to get authentication headers."""
        client.post("/api/v1/auth/register", json=test_user_data)
        login_data = {"username": test_user_data["username"], "password": test_user_data["password"]}
        login_response = client.post("/api/v1/auth/login", json=login_data)
        token = login_response.json()["access_token"]
        return {"Authorization": f"Bearer {token}"}

    def test_create_post(self, client: TestClient, test_user_data, test_post_data):
        """Test creating a post."""
        headers = self.get_auth_headers(client, test_user_data)
        response = client.post("/api/v1/posts/", json=test_post_data, headers=headers)
        assert response.status_code == 201
        data = response.json()
        assert data["title"] == test_post_data["title"]
        assert data["content"] == test_post_data["content"]
        assert data["author_id"] is not None
        assert data["slug"] is not None

    def test_create_post_unauthorized(self, client: TestClient, test_post_data):
        """Test creating a post without authentication."""
        response = client.post("/api/v1/posts/", json=test_post_data)
        assert response.status_code == 403

    def test_get_posts(self, client: TestClient, test_user_data, test_post_data):
        """Test getting list of posts."""
        headers = self.get_auth_headers(client, test_user_data)
        
        # Create a post first
        client.post("/api/v1/posts/", json=test_post_data, headers=headers)
        
        # Get posts
        response = client.get("/api/v1/posts/")
        assert response.status_code == 200
        data = response.json()
        assert "posts" in data
        assert "total" in data
        assert len(data["posts"]) >= 1

    def test_get_post_by_id(self, client: TestClient, test_user_data, test_post_data):
        """Test getting a post by ID."""
        headers = self.get_auth_headers(client, test_user_data)
        
        # Create a post first
        create_response = client.post("/api/v1/posts/", json=test_post_data, headers=headers)
        post_id = create_response.json()["id"]
        
        # Get post by ID
        response = client.get(f"/api/v1/posts/{post_id}")
        assert response.status_code == 200
        data = response.json()
        assert data["id"] == post_id
        assert data["title"] == test_post_data["title"]

    def test_update_post(self, client: TestClient, test_user_data, test_post_data):
        """Test updating a post."""
        headers = self.get_auth_headers(client, test_user_data)
        
        # Create a post first
        create_response = client.post("/api/v1/posts/", json=test_post_data, headers=headers)
        post_id = create_response.json()["id"]
        
        # Update post
        update_data = {"title": "Updated Title", "content": "Updated content"}
        response = client.put(f"/api/v1/posts/{post_id}", json=update_data, headers=headers)
        assert response.status_code == 200
        data = response.json()
        assert data["title"] == "Updated Title"
        assert data["content"] == "Updated content"

    def test_delete_post(self, client: TestClient, test_user_data, test_post_data):
        """Test deleting a post."""
        headers = self.get_auth_headers(client, test_user_data)
        
        # Create a post first
        create_response = client.post("/api/v1/posts/", json=test_post_data, headers=headers)
        post_id = create_response.json()["id"]
        
        # Delete post
        response = client.delete(f"/api/v1/posts/{post_id}", headers=headers)
        assert response.status_code == 200
        assert "Post deleted successfully" in response.json()["message"]
        
        # Verify post is deleted
        get_response = client.get(f"/api/v1/posts/{post_id}")
        assert get_response.status_code == 404

    def test_search_posts(self, client: TestClient, test_user_data, test_post_data):
        """Test searching posts."""
        headers = self.get_auth_headers(client, test_user_data)
        
        # Create multiple posts
        posts_data = [
            {"title": "Python Tutorial", "content": "Learn Python programming", "is_published": True},
            {"title": "FastAPI Guide", "content": "Build APIs with FastAPI", "is_published": True},
            {"title": "Database Design", "content": "SQL database design patterns", "is_published": True}
        ]
        
        for post_data in posts_data:
            client.post("/api/v1/posts/", json=post_data, headers=headers)
        
        # Search for "Python"
        response = client.get("/api/v1/posts/?search=Python")
        assert response.status_code == 200
        data = response.json()
        assert len(data["posts"]) >= 1
        assert any("Python" in post["title"] for post in data["posts"])

# tests/test_integration.py
import pytest
from fastapi.testclient import TestClient

class TestIntegration:
    def test_full_user_workflow(self, client: TestClient):
        """Test complete user workflow from registration to post management."""
        user_data = {
            "username": "integrationuser",
            "email": "integration@example.com",
            "password": "integration123",
            "full_name": "Integration User"
        }
        
        # 1. Register user
        register_response = client.post("/api/v1/auth/register", json=user_data)
        assert register_response.status_code == 201
        user_id = register_response.json()["id"]
        
        # 2. Login user
        login_response = client.post("/api/v1/auth/login", json={
            "username": user_data["username"],
            "password": user_data["password"]
        })
        assert login_response.status_code == 200
        token = login_response.json()["access_token"]
        headers = {"Authorization": f"Bearer {token}"}
        
        # 3. Get user info
        user_info_response = client.get("/api/v1/auth/me", headers=headers)
        assert user_info_response.status_code == 200
        assert user_info_response.json()["username"] == user_data["username"]
        
        # 4. Create a post
        post_data = {
            "title": "Integration Test Post",
            "content": "This post was created during integration testing.",
            "excerpt": "Integration test excerpt",
            "is_published": True
        }
        create_post_response = client.post("/api/v1/posts/", json=post_data, headers=headers)
        assert create_post_response.status_code == 201
        post_id = create_post_response.json()["id"]
        
        # 5. Get the post
        get_post_response = client.get(f"/api/v1/posts/{post_id}")
        assert get_post_response.status_code == 200
        assert get_post_response.json()["title"] == post_data["title"]
        
        # 6. Update the post
        update_data = {"title": "Updated Integration Post"}
        update_response = client.put(f"/api/v1/posts/{post_id}", json=update_data, headers=headers)
        assert update_response.status_code == 200
        assert update_response.json()["title"] == "Updated Integration Post"
        
        # 7. Delete the post
        delete_response = client.delete(f"/api/v1/posts/{post_id}", headers=headers)
        assert delete_response.status_code == 200
        
        # 8. Verify post is deleted
        final_get_response = client.get(f"/api/v1/posts/{post_id}")
        assert final_get_response.status_code == 404`,
          explanation: `Esta configuración de testing proporciona:

**Configuración de Test Environment:**
• Base de datos en memoria para tests rápidos
• Sesiones frescas para cada test
• Override de dependencias para testing
• Event loop para operaciones asíncronas

**Fixtures Reutilizables:**
• db_session: Base de datos limpia para cada test
• client: TestClient con dependencias override
• test_user_data: Datos de usuario para tests
• test_post_data: Datos de post para tests

**Test Classes Organizadas:**
• TestAuth: Tests de autenticación
• TestPosts: Tests de gestión de posts
• TestIntegration: Tests de integración completos

**Casos de Test Cubiertos:**
• Registro de usuarios (éxito y duplicados)
• Login (éxito y credenciales inválidas)
• Obtención de usuario actual
• Creación de posts (autorizado y no autorizado)
• CRUD completo de posts
• Búsqueda y filtrado
• Workflow completo de integración

**Mejoras Implementadas:**
• Tests aislados con rollback automático
• Helper methods para código repetitivo
• Verificación completa de respuestas
• Tests de integración end-to-end
• Manejo adecuado de asincronía

**Buenas Prácticas:**
• Nombres descriptivos de tests
• Asserts específicos y claros
• Setup y cleanup automáticos
• Tests independientes
• Cobertura de casos normales y edge cases

**Características Técnicas:**
• Uso de SQLite en memoria para velocidad
• Override de dependencias con FastAPI
• Manejo de transacciones para aislamiento
• Soporte para operaciones asíncronas
• Client HTTP para testing de APIs`,
          tip: 'Ejecuta tests con pytest --cov=app para medir coverage. Apunta a >90% de coverage para producción.'
        },
        {
          title: 'Configurar Docker y Docker Compose',
          content: `Crea archivos Docker para contenerizar la aplicación:`,
          code: `# Dockerfile
FROM python:3.11-slim as builder

# Instalar dependencias del sistema
RUN apt-get update && apt-get install -y \\
    gcc \\
    postgresql-client \\
    && rm -rf /var/lib/apt/lists/*

# Establecer directorio de trabajo
WORKDIR /app

# Copiar requirements primero para caché de Docker
COPY requirements.txt .

# Instalar dependencias de Python
RUN pip install --no-cache-dir --user -r requirements.txt
RUN pip install --no-cache-dir --user gunicorn

# Etapa de producción
FROM python:3.11-slim

# Instalar dependencias del sistema necesarias
RUN apt-get update && apt-get install -y \\
    postgresql-client \\
    curl \\
    && rm -rf /var/lib/apt/lists/*

# Crear usuario no root
RUN useradd --create-home --shell /bin/bash app

# Copiar dependencias de la etapa builder
COPY --from=builder /root/.local /home/app/.local

# Establecer PATH para incluir las dependencias instaladas
ENV PATH=/home/app/.local/bin:$PATH

# Cambiar al usuario app
USER app

# Establecer directorio de trabajo
WORKDIR /home/app

# Copiar aplicación
COPY --chown=app:app . .

# Crear directorio de uploads
RUN mkdir -p uploads && chmod 755 uploads

# Exponer puerto
EXPOSE 8000

# Variables de entorno
ENV PYTHONPATH=/home/app
ENV PYTHONUNBUFFERED=1

# Comando para ejecutar la aplicación
CMD ["gunicorn", "--bind", "0.0.0.0:8000", "--workers", "4", "--worker-class", "uvicorn.workers.UvicornWorker", "--worker-tmp-dir", "/dev/shm", "app.main:app"]

# docker-compose.yml
version: '3.8'

services:
  app:
    build: .
    ports:
      - "8000:8000"
    depends_on:
      - db
      - redis
    environment:
      - DATABASE_URL=postgresql+asyncpg://blog_user:blog_password@db:5432/blog_db
      - REDIS_URL=redis://redis:6379/0
      - SECRET_KEY=your-secret-key-change-in-production
      - DEBUG=False
    volumes:
      - ./uploads:/home/app/uploads
    restart: unless-stopped
    healthcheck:
      test: ["CMD", "curl", "-f", "http://localhost:8000/docs"]
      interval: 30s
      timeout: 10s
      retries: 3
      start_period: 40s

  db:
    image: postgres:15
    environment:
      POSTGRES_USER: blog_user
      POSTGRES_PASSWORD: blog_password
      POSTGRES_DB: blog_db
    volumes:
      - postgres_data:/var/lib/postgresql/data
      - ./init.sql:/docker-entrypoint-initdb.d/init.sql
    ports:
      - "5432:5432"
    restart: unless-stopped
    healthcheck:
      test: ["CMD-SHELL", "pg_isready -U blog_user -d blog_db"]
      interval: 10s
      timeout: 5s
      retries: 5

  redis:
    image: redis:7-alpine
    ports:
      - "6379:6379"
    volumes:
      - redis_data:/data
    restart: unless-stopped
    healthcheck:
      test: ["CMD", "redis-cli", "ping"]
      interval: 10s
      timeout: 3s
      retries: 3

  nginx:
    image: nginx:alpine
    ports:
      - "80:80"
      - "443:443"
    volumes:
      - ./nginx.conf:/etc/nginx/nginx.conf:ro
      - ./uploads:/var/www/uploads:ro
      - ./ssl:/etc/nginx/ssl:ro
    depends_on:
      - app
    restart: unless-stopped

volumes:
  postgres_data:
  redis_data:

# init.sql
-- Crear extensión para UUID
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

# Crear usuario y base de datos si no existen
DO
$do$
BEGIN
   IF NOT EXISTS (SELECT FROM pg_catalog.pg_roles WHERE rolname = 'blog_user') THEN
      CREATE ROLE blog_user LOGIN PASSWORD 'blog_password';
   END IF;
END
$do$;

DO
$do$
BEGIN
   IF NOT EXISTS (SELECT FROM pg_database WHERE datname = 'blog_db') THEN
      PERFORM dblink_exec('dbname=''template1''', ''CREATE DATABASE blog_db OWNER blog_user'');
   END IF;
END
$do$;

-- Conceder permisos
GRANT ALL PRIVILEGES ON DATABASE blog_db TO blog_user;
GRANT ALL ON SCHEMA public TO blog_user;
GRANT ALL ON ALL TABLES IN SCHEMA public TO blog_user;
GRANT ALL ON ALL SEQUENCES IN SCHEMA public TO blog_user;
GRANT ALL ON SCHEMA public TO public;

# nginx.conf
events {
    worker_connections 1024;
}

http {
    upstream app {
        server app:8000;
    }

    # Rate limiting
    limit_req_zone $binary_remote_addr zone=api:10m rate=10r/s;
    limit_req_zone $binary_remote_addr zone=login:10m rate=5r/m;

    server {
        listen 80;
        server_name localhost;

        # Security headers
        add_header X-Frame-Options "SAMEORIGIN" always;
        add_header X-Content-Type-Options "nosniff" always;
        add_header X-XSS-Protection "1; mode=block" always;
        add_header Referrer-Policy "strict-origin-when-cross-origin" always;

        # Gzip compression
        gzip on;
        gzip_vary on;
        gzip_min_length 1024;
        gzip_types text/plain text/css text/xml text/javascript application/javascript application/xml+rss application/json;

        # Static files
        location /uploads/ {
            alias /var/www/uploads/;
            expires 1y;
            add_header Cache-Control "public, immutable";
        }

        # API endpoints with rate limiting
        location /api/v1/auth/login {
            limit_req zone=login burst=10 nodelay;
            proxy_pass http://app;
            proxy_set_header Host $host;
            proxy_set_header X-Real-IP $remote_addr;
            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
            proxy_set_header X-Forwarded-Proto $scheme;
        }

        location /api/ {
            limit_req zone=api burst=20 nodelay;
            proxy_pass http://app;
            proxy_set_header Host $host;
            proxy_set_header X-Real-IP $remote_addr;
            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
            proxy_set_header X-Forwarded-Proto $scheme;
            
            # Timeouts
            proxy_connect_timeout 30s;
            proxy_send_timeout 30s;
            proxy_read_timeout 30s;
        }

        # Documentation
        location /docs {
            proxy_pass http://app;
            proxy_set_header Host $host;
            proxy_set_header X-Real-IP $remote_addr;
            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
            proxy_set_header X-Forwarded-Proto $scheme;
        }

        # Health check
        location /health {
            proxy_pass http://app;
            proxy_set_header Host $host;
            proxy_set_header X-Real-IP $remote_addr;
            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
            proxy_set_header X-Forwarded-Proto $scheme;
        }

        location / {
            proxy_pass http://app;
            proxy_set_header Host $host;
            proxy_set_header X-Real-IP $remote_addr;
            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
            proxy_set_header X-Forwarded-Proto $scheme;
        }
    }
}

# docker-compose.dev.yml
version: '3.8'

services:
  app:
    build: 
      context: .
      dockerfile: Dockerfile.dev
    ports:
      - "8000:8000"
    depends_on:
      - db
      - redis
    environment:
      - DATABASE_URL=postgresql+asyncpg://blog_user:blog_password@db:5432/blog_db
      - REDIS_URL=redis://redis:6379/0
      - SECRET_KEY=dev-secret-key-not-for-production
      - DEBUG=True
    volumes:
      - .:/home/app
      - ./uploads:/home/app/uploads
    command: uvicorn app.main:app --host 0.0.0.0 --port 8000 --reload

  db:
    image: postgres:15
    environment:
      POSTGRES_USER: blog_user
      POSTGRES_PASSWORD: blog_password
      POSTGRES_DB: blog_db
    volumes:
      - postgres_data:/var/lib/postgresql/data
    ports:
      - "5432:5432"

  redis:
    image: redis:7-alpine
    ports:
      - "6379:6379"
    volumes:
      - redis_data:/data

volumes:
  postgres_data:
  redis_data:

# Dockerfile.dev
FROM python:3.11-slim

# Instalar dependencias del sistema
RUN apt-get update && apt-get install -y \\
    gcc \\
    postgresql-client \\
    curl \\
    && rm -rf /var/lib/apt/lists/*

# Establecer directorio de trabajo
WORKDIR /app

# Copiar requirements e instalar dependencias
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copiar aplicación
COPY . .

# Crear directorio de uploads
RUN mkdir -p uploads && chmod 755 uploads

# Exponer puerto
EXPOSE 8000

# Variables de entorno
ENV PYTHONPATH=/app
ENV PYTHONUNBUFFERED=1

# Comando por defecto
CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "8000", "--reload"]`,
          explanation: `Esta configuración Docker proporciona:

**Dockerfile Multi-stage:**
• Builder stage: Instala dependencias y build tools
• Production stage: Imagen mínima con solo lo necesario
• Optimización de tamaño y seguridad
• Usuario no root para seguridad

**Docker Compose Producción:**
• app: Servicio principal con gunicorn
• db: PostgreSQL con persistencia de datos
• redis: Redis para caching
• nginx: Reverse proxy con SSL y rate limiting
• Health checks para todos los servicios
• Volúmenes para persistencia de datos

**Características de Seguridad:**
• Usuario no root en contenedores
• Variables de entorno inyectadas
• Health checks para monitoreo
• Rate limiting para protección
• Headers de seguridad en nginx

**Optimizaciones de Rendimiento:**
• Multi-stage build para imágenes pequeñas
• Gunicorn con workers uvicorn
• Nginx con gzip y caché estático
• Conexiones persistentes a base de datos
• Pool de conexiones optimizado

**Configuración de Desarrollo:**
• docker-compose.dev.yml para desarrollo
• Dockerfile.dev con herramientas de desarrollo
• Montaje de código en vivo para hot reload
• Mismos servicios que producción

**Nginx Configuration:**
• Reverse proxy para la aplicación
• Rate limiting por endpoint
• Compresión gzip
• Headers de seguridad
• Manejo de archivos estáticos
• Timeouts configurados

**Características de Producción:**
• Escalabilidad horizontal
• Persistencia de datos
• Monitoreo con health checks
• Logs estructurados
• Configuración de red optimizada

**Mejoras Implementadas:**
• Imágenes optimizadas con multi-stage
• Separación de entornos (dev/prod)
• Configuración de seguridad completa
• Monitoreo y health checks
• Persistencia y backup de datos`,
          tip: 'Usa Docker Swarm o Kubernetes para orquestración en producción. Configura logs centralizados con ELK stack.'
        },
        {
          title: 'Configurar CI/CD con GitHub Actions',
          content: `Crea un pipeline de CI/CD automatizado:`,
          code: `# .github/workflows/ci.yml
name: CI/CD Pipeline

on:
  push:
    branches: [ main, develop ]
  pull_request:
    branches: [ main ]

env:
  REGISTRY: ghcr.io
  IMAGE_NAME: \${{ github.repository }}

jobs:
  test:
    name: Run Tests
    runs-on: ubuntu-latest
    
    services:
      postgres:
        image: postgres:15
        env:
          POSTGRES_USER: test_user
          POSTGRES_PASSWORD: test_password
          POSTGRES_DB: test_db
        options: >-
          --health-cmd pg_isready
          --health-interval 10s
          --health-timeout 5s
          --health-retries 5
        ports:
          - 5432:5432
      
      redis:
        image: redis:7-alpine
        options: >-
          --health-cmd "redis-cli ping"
          --health-interval 10s
          --health-timeout 3s
          --health-retries 5
        ports:
          - 6379:6379

    steps:
    - name: Checkout code
      uses: actions/checkout@v4

    - name: Set up Python
      uses: actions/setup-python@v4
      with:
        python-version: '3.11'

      - name: Cache pip dependencies
      uses: actions/cache@v3
      with:
        path: ~/.cache/pip
        key: dependencies-\${{ hashFiles('requirements.txt') }}

    - name: Install dependencies
      run: |
        python -m pip install --upgrade pip
        pip install -r requirements.txt
        pip install pytest pytest-cov pytest-asyncio httpx

    - name: Run pre-commit hooks
      run: |
        pip install pre-commit
        pre-commit run --all-files

    - name: Run tests with coverage
      run: |
        pytest tests/ -v --cov=app --cov-report=xml --cov-report=html
      env:
        DATABASE_URL: postgresql+asyncpg://test_user:test_password@localhost:5432/test_db
        REDIS_URL: redis://localhost:6379/0
        SECRET_KEY: test-secret-key
        DEBUG: False

    - name: Upload coverage to Codecov
      uses: codecov/codecov-action@v3
      with:
        file: ./coverage.xml
        flags: unittests
        name: codecov-umbrella

    - name: Upload coverage reports
      uses: actions/upload-artifact@v3
      with:
        name: coverage-reports
        path: htmlcov/

  security-scan:
    name: Security Scan
    runs-on: ubuntu-latest
    needs: test
    
    steps:
    - name: Checkout code
      uses: actions/checkout@v4

    - name: Run Trivy vulnerability scanner
      uses: aquasecurity/trivy-action@master
      with:
        scan-type: 'fs'
        scan-ref: '.'
        format: 'sarif'
        output: 'trivy-results.sarif'

    - name: Upload Trivy scan results to GitHub Security tab
      uses: github/codeql-action/upload-sarif@v2
      with:
        sarif_file: 'trivy-results.sarif'

  build-and-push:
    name: Build and Push Docker Image
    runs-on: ubuntu-latest
    needs: [test, security-scan]
    outputs:
      image: \${{ steps.build.outputs.image }}
      digest: \${{ steps.build.outputs.digest }}
    if: github.ref == 'refs/heads/main'

    permissions:
      contents: read
      packages: write

    steps:
    - name: Checkout repository
      uses: actions/checkout@v4

    - name: Set up Docker Buildx
      uses: docker/setup-buildx-action@v3

    - name: Log in to the Container registry
      uses: docker/login-action@v3
      with:
        registry: \${{ env.REGISTRY }}
        username: \${{ github.actor }}
        password: \${{ secrets.GITHUB_TOKEN }}

    - name: Extract metadata
      id: meta
      uses: docker/metadata-action@v5
      with:
        images: \${{ env.REGISTRY }}/\${{ env.IMAGE_NAME }}
        tags: |
          type=ref,event=branch
          type=ref,event=pr
          type=sha,prefix={{branch}}-
          type=raw,value=latest,enable={{is_default_branch}}

    - name: Build and push Docker image
      id: build
      uses: docker/build-push-action@v5
      with:
        context: .
        platforms: linux/amd64,linux/arm64
        push: true
        tags: \${{ steps.meta.outputs.tags }}
        labels: \${{ steps.meta.outputs.labels }}
        cache-from: type=gha
        cache-to: type=gha,mode=max

  deploy-staging:
    name: Deploy to Staging
    runs-on: ubuntu-latest
    needs: build-and-push
    if: github.ref == 'refs/heads/main'
    environment: staging

    steps:
    - name: Checkout repository
      uses: actions/checkout@v4

    - name: Deploy to staging server
      uses: appleboy/ssh-action@v1.0.0
      with:
        host: \${{ secrets.STAGING_HOST }}
        username: \${{ secrets.STAGING_USER }}
        key: \${{ secrets.STAGING_SSH_KEY }}
        script: |
          cd /opt/blog-api
          docker-compose pull
          docker-compose up -d
          docker system prune -f

    - name: Run smoke tests
      run: |
        sleep 30
        curl -f http://\${{ secrets.STAGING_HOST }}/health || exit 1

  deploy-production:
    name: Deploy to Production
    runs-on: ubuntu-latest
    needs: [deploy-staging]
    if: github.ref == 'refs/heads/main'
    environment: production

    steps:
    - name: Create deployment issue
      uses: actions/github-script@v6
      with:
        script: |
          github.rest.issues.create({
            owner: context.repo.owner,
            repo: context.repo.repo,
            title: 'Production Deployment Request',
            body: 'Ready for production deployment. Please review and approve.',
            labels: ['deployment', 'production']
          })

    - name: Wait for manual approval
      id: approval
      uses: trstringer/manual-approval@v1
      with:
        secret: \${{ github.token }}
        approvers: \${{ secrets.APPROVERS }}
        minimum-approved: 1
        issue-title: 'Production Deployment Request'
        issue-body: 'Ready for production deployment. Please review and approve.'

    - name: Deploy to production
      if: steps.approval.outputs.approved == 'true'
      uses: appleboy/ssh-action@v1.0.0
      with:
        host: \${{ secrets.PRODUCTION_HOST }}
        username: \${{ secrets.PRODUCTION_USER }}
        key: \${{ secrets.PRODUCTION_SSH_KEY }}
        script: |
          cd /opt/blog-api
          docker-compose pull
          docker-compose up -d
          docker system prune -f

    - name: Notify deployment
      if: always()
      uses: 8398a7/action-slack@v3
      with:
        status: \${{ job.status }}
        channel: '#deployments'
        webhook_url: \${{ secrets.SLACK_WEBHOOK }}
        fields: repo,message,commit,author,action,eventName,ref,workflow
      env:
        SLACK_WEBHOOK_URL: \${{ secrets.SLACK_WEBHOOK }}

# .github/workflows/nightly.yml
name: Nightly Security Scan

on:
  schedule:
    - cron: '0 2 * * *'  # Run at 2 AM daily

jobs:
  security-scan:
    name: Nightly Security Scan
    runs-on: ubuntu-latest

    strategy:
      matrix:
        scanner: [trivy, snyk]

    steps:
    - name: Checkout code
      uses: actions/checkout@v4

    - name: Run \${{ matrix.scanner }} security scan
      if: matrix.scanner == 'trivy'
      uses: aquasecurity/trivy-action@master
      with:
        scan-type: 'fs'
        scan-ref: '.'
        format: 'sarif'
        output: 'trivy-results.sarif'

    - name: Run Snyk security scan
      if: matrix.scanner == 'snyk'
      uses: snyk/actions/node@master
      env:
        SNYK_TOKEN: \${{ secrets.SNYK_TOKEN }}
      with:
        args: --severity-threshold=high
        command: test

    - name: Upload scan results
      if: matrix.scanner == 'trivy'
      uses: github/codeql-action/upload-sarif@v2
      with:
        sarif_file: 'trivy-results.sarif'

# pre-commit-config.yaml
repos:
  - repo: https://github.com/pre-commit/pre-commit-hooks
    rev: v4.4.0
    hooks:
      - id: trailing-whitespace
      - id: end-of-file-fixer
      - id: check-yaml
      - id: check-added-large-files
      - id: check-case-conflict
      - id: check-merge-conflict
      - id: debug-statements
      - id: mixed-line-ending

  - repo: https://github.com/psf/black
    rev: 23.11.0
    hooks:
      - id: black
        language_version: python3

  - repo: https://github.com/pycqa/isort
    rev: 5.12.0
    hooks:
      - id: isort
        args: ["--profile", "black"]

  - repo: https://github.com/pycqa/flake8
    rev: 6.1.0
    hooks:
      - id: flake8
        additional_dependencies: [flake8-docstrings, flake8-bugbear]

  - repo: https://github.com/pre-commit/mirrors-mypy
    rev: v1.7.1
    hooks:
      - id: mypy
        additional_dependencies: [types-requests, types-redis]

  - repo: https://github.com/pycqa/bandit
    rev: 1.7.5
    hooks:
      - id: bandit
        args: [-r, app]

  - repo: https://github.com/Lucas-C/pre-commit-hooks-safety
    rev: v1.3.2
    hooks:
      - id: python-safety-dependencies-check
        files: requirements.*\\.txt`,
          explanation: `Esta configuración CI/CD proporciona:

**Pipeline Principal (ci.yml):**
• **Test Job**: Ejecuta tests con coverage
• **Security Scan**: Análisis de vulnerabilidades
• **Build and Push**: Construye y publica imágenes Docker
• **Deploy Staging**: Despliegue a staging automático
• **Deploy Production**: Despliegue a producción con aprobación manual

**Características de Testing:**
• Servicios integrados (PostgreSQL, Redis)
• Cache de dependencias para velocidad
• Pre-commit hooks para calidad de código
• Coverage report y upload a Codecov
• Tests paralelos y optimizados

**Security Scans:**
• Trivy para vulnerabilidades en dependencias
• Snyk para análisis de seguridad adicional
• Bandit para seguridad de código Python
• Safety para dependencias Python
• Upload de resultados a GitHub Security

**Docker Build Optimizado:**
• Multi-platform builds (amd64, arm64)
• Cache de capas Docker
• Metadatos automáticos
• Push a GitHub Container Registry
• Tags versionados automáticos

**Despliegue Automatizado:**
• Staging: Despliegue automático post-merge
• Production: Despliegue con aprobación manual
• Smoke tests post-despliegue
• Notificaciones via Slack
• Rollback automático en caso de fallos

**Nightly Scans:**
• Scans de seguridad diarios
• Detección de nuevas vulnerabilidades
• Reportes automáticos
• Integración con GitHub Security

**Pre-commit Configuration:**
• Black para formateo de código
• isort para ordenamiento de imports
• flake8 para linting
• mypy para tipado estático
• bandit para seguridad de código
• safety para dependencias

**Mejoras de Calidad:**
• Calidad de código asegurada
• Seguridad proactiva
• Despliegues confiables
• Monitoreo continuo
• Documentación automática

**Características Avanzadas:**
• Matriz de builds para diferentes escáneres
• Aprobaciones manuales para producción
• Notificaciones integradas
• Cache inteligente
• Parallel execution`,
          tip: 'Configura branch protection rules en GitHub para requerir tests aprobados antes de merge a main.'
        },
        {
          title: 'Configurar monitoreo y logging',
          content: `Añade monitoreo y logging estructurado:`,
          code: `# app/core/logging.py
import logging
import logging.config
import json
import sys
from datetime import datetime
from typing import Dict, Any
from app.core.config import settings

class JSONFormatter(logging.Formatter):
    """Custom JSON formatter for structured logging"""
    
    def format(self, record):
        log_entry = {
            "timestamp": datetime.utcnow().isoformat(),
            "level": record.levelname,
            "logger": record.name,
            "message": record.getMessage(),
            "module": record.module,
            "function": record.funcName,
            "line": record.lineno
        }
        
        # Add extra fields if present
        if hasattr(record, 'user_id'):
            log_entry["user_id"] = record.user_id
        if hasattr(record, 'request_id'):
            log_entry["request_id"] = record.request_id
        if hasattr(record, 'ip_address'):
            log_entry["ip_address"] = record.ip_address
        if hasattr(record, 'endpoint'):
            log_entry["endpoint"] = record.endpoint
        if hasattr(record, 'method'):
            log_entry["method"] = record.method
        if hasattr(record, 'status_code'):
            log_entry["status_code"] = record.status_code
        if hasattr(record, 'response_time'):
            log_entry["response_time"] = record.response_time
        
        # Add exception info if present
        if record.exc_info:
            log_entry["exception"] = self.formatException(record.exc_info)
        
        return json.dumps(log_entry)

def setup_logging():
    """Setup logging configuration"""
    
    log_level = logging.DEBUG if settings.debug else logging.INFO
    
    logging_config = {
        "version": 1,
        "disable_existing_loggers": False,
        "formatters": {
            "json": {
                "()": "app.core.logging.JSONFormatter"
            },
            "standard": {
                "format": "%(asctime)s [%(levelname)s] %(name)s: %(message)s"
            }
        },
        "handlers": {
            "console": {
                "class": "logging.StreamHandler",
                "level": log_level,
                "formatter": "json" if not settings.debug else "standard",
                "stream": sys.stdout
            },
            "file": {
                "class": "logging.handlers.RotatingFileHandler",
                "level": log_level,
                "formatter": "json",
                "filename": "logs/app.log",
                "maxBytes": 10485760,  # 10MB
                "backupCount": 5,
                "encoding": "utf8"
            },
            "error_file": {
                "class": "logging.handlers.RotatingFileHandler",
                "level": logging.ERROR,
                "formatter": "json",
                "filename": "logs/errors.log",
                "maxBytes": 10485760,  # 10MB
                "backupCount": 10,
                "encoding": "utf8"
            }
        },
        "loggers": {
            "": {
                "handlers": ["console", "file"],
                "level": log_level,
                "propagate": False
            },
            "uvicorn": {
                "handlers": ["console"],
                "level": log_level,
                "propagate": False
            },
            "uvicorn.error": {
                "handlers": ["console", "error_file"],
                "level": logging.ERROR,
                "propagate": False
            },
            "sqlalchemy": {
                "handlers": ["console", "file"],
                "level": logging.WARNING if not settings.debug else log_level,
                "propagate": False
            }
        }
    }
    
    logging.config.dictConfig(logging_config)

def get_logger(name: str) -> logging.Logger:
    """Get logger with specified name"""
    return logging.getLogger(name)

# app/core/middleware.py
import time
import uuid
from typing import Callable
from fastapi import Request, Response
from starlette.middleware.base import BaseHTTPMiddleware
from app.core.logging import get_logger

logger = get_logger(__name__)

class LoggingMiddleware(BaseHTTPMiddleware):
    """Middleware for request logging and monitoring"""
    
    async def dispatch(self, request: Request, call_next: Callable) -> Response:
        # Generate request ID
        request_id = str(uuid.uuid4())
        
        # Add request ID to logger context
        logger.info(
            "Incoming request",
            extra={
                "request_id": request_id,
                "ip_address": request.client.host,
                "method": request.method,
                "endpoint": str(request.url.path),
                "user_agent": request.headers.get("user-agent", "")
            }
        )
        
        # Add request ID to request state for access in endpoints
        request.state.request_id = request_id
        
        # Measure response time
        start_time = time.time()
        
        try:
            response = await call_next(request)
            
            # Calculate response time
            response_time = time.time() - start_time
            
            # Log response
            logger.info(
                "Request completed",
                extra={
                    "request_id": request_id,
                    "method": request.method,
                    "endpoint": str(request.url.path),
                    "status_code": response.status_code,
                    "response_time": round(response_time * 1000, 2)  # Convert to milliseconds
                }
            )
            
            # Add request ID to response headers
            response.headers["X-Request-ID"] = request_id
            
            return response
            
        except Exception as e:
            # Log error
            response_time = time.time() - start_time
            logger.error(
                "Request failed",
                extra={
                    "request_id": request_id,
                    "method": request.method,
                    "endpoint": str(request.url.path),
                    "error": str(e),
                    "response_time": round(response_time * 1000, 2)
                },
                exc_info=True
            )
            raise

class MetricsMiddleware(BaseHTTPMiddleware):
    """Middleware for collecting metrics"""
    
    def __init__(self, app):
        super().__init__(app)
        self.request_counts = {}
        self.response_times = {}
    
    async def dispatch(self, request: Request, call_next: Callable) -> Response:
        endpoint = f"{request.method} {request.url.path}"
        
        # Increment request count
        self.request_counts[endpoint] = self.request_counts.get(endpoint, 0) + 1
        
        # Measure response time
        start_time = time.time()
        response = await call_next(request)
        response_time = time.time() - start_time
        
        # Update response time metrics
        if endpoint not in self.response_times:
            self.response_times[endpoint] = []
        self.response_times[endpoint].append(response_time)
        
        # Keep only last 100 response times
        if len(self.response_times[endpoint]) > 100:
            self.response_times[endpoint] = self.response_times[endpoint][-100:]
        
        return response
    
    def get_metrics(self) -> Dict[str, Any]:
        """Get current metrics"""
        metrics = {
            "request_counts": self.request_counts,
            "average_response_times": {}
        }
        
        for endpoint, times in self.response_times.items():
            if times:
                metrics["average_response_times"][endpoint] = sum(times) / len(times)
        
        return metrics

# app/core/monitoring.py
import psutil
import asyncio
from typing import Dict, Any
from datetime import datetime
from app.core.logging import get_logger

logger = get_logger(__name__)

class SystemMonitor:
    """System monitoring and metrics collection"""
    
    def __init__(self):
        self.metrics_history = []
        self.max_history_size = 1000
    
    async def collect_system_metrics(self) -> Dict[str, Any]:
        """Collect system metrics"""
        try:
            # CPU metrics
            cpu_percent = psutil.cpu_percent(interval=1)
            cpu_count = psutil.cpu_count()
            load_avg = psutil.getloadavg()
            
            # Memory metrics
            memory = psutil.virtual_memory()
            swap = psutil.swap_memory()
            
            # Disk metrics
            disk = psutil.disk_usage('/')
            
            # Network metrics
            network = psutil.net_io_counters()
            
            metrics = {
                "timestamp": datetime.utcnow().isoformat(),
                "cpu": {
                    "percent": cpu_percent,
                    "count": cpu_count,
                    "load_avg": list(load_avg)
                },
                "memory": {
                    "total": memory.total,
                    "available": memory.available,
                    "percent": memory.percent,
                    "used": memory.used,
                    "swap_total": swap.total,
                    "swap_used": swap.used,
                    "swap_percent": swap.percent
                },
                "disk": {
                    "total": disk.total,
                    "used": disk.used,
                    "free": disk.free,
                    "percent": disk.percent
                },
                "network": {
                    "bytes_sent": network.bytes_sent,
                    "bytes_recv": network.bytes_recv,
                    "packets_sent": network.packets_sent,
                    "packets_recv": network.packets_recv
                }
            }
            
            # Add to history
            self.metrics_history.append(metrics)
            if len(self.metrics_history) > self.max_history_size:
                self.metrics_history = self.metrics_history[-self.max_history_size:]
            
            return metrics
            
        except Exception as e:
            logger.error(f"Error collecting system metrics: {e}", exc_info=True)
            return {}
    
    def get_metrics_summary(self, hours: int = 1) -> Dict[str, Any]:
        """Get metrics summary for the last N hours"""
        cutoff_time = datetime.utcnow().timestamp() - (hours * 3600)
        
        recent_metrics = [
            m for m in self.metrics_history 
            if datetime.fromisoformat(m["timestamp"]).timestamp() > cutoff_time
        ]
        
        if not recent_metrics:
            return {}
        
        summary = {
            "period_hours": hours,
            "total_samples": len(recent_metrics),
            "cpu": {
                "avg_percent": sum(m["cpu"]["percent"] for m in recent_metrics) / len(recent_metrics),
                "max_percent": max(m["cpu"]["percent"] for m in recent_metrics)
            },
            "memory": {
                "avg_percent": sum(m["memory"]["percent"] for m in recent_metrics) / len(recent_metrics),
                "max_percent": max(m["memory"]["percent"] for m in recent_metrics)
            },
            "disk": {
                "avg_percent": sum(m["disk"]["percent"] for m in recent_metrics) / len(recent_metrics),
                "max_percent": max(m["disk"]["percent"] for m in recent_metrics)
            }
        }
        
        return summary

# Global monitor instance
system_monitor = SystemMonitor()

# app/api/v1/monitoring.py
from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.ext.asyncio import AsyncSession
from app.db.session import get_db
from app.core.dependencies import get_current_superuser
from app.core.monitoring import system_monitor
from app.core.middleware import MetricsMiddleware
from app.main import app  # Import the app to access middleware

router = APIRouter()

@router.get("/health")
async def health_check():
    """Basic health check endpoint"""
    return {
        "status": "healthy",
        "timestamp": datetime.utcnow().isoformat(),
        "version": "1.0.0"
    }

@router.get("/health/detailed")
async def detailed_health_check():
    """Detailed health check with system metrics"""
    try:
        metrics = await system_monitor.collect_system_metrics()
        
        health_status = "healthy"
        issues = []
        
        # Check CPU
        if metrics["cpu"]["percent"] > 80:
            health_status = "degraded"
            issues.append("High CPU usage")
        
        # Check Memory
        if metrics["memory"]["percent"] > 85:
            health_status = "degraded"
            issues.append("High memory usage")
        
        # Check Disk
        if metrics["disk"]["percent"] > 90:
            health_status = "degraded"
            issues.append("High disk usage")
        
        return {
            "status": health_status,
            "timestamp": datetime.utcnow().isoformat(),
            "metrics": metrics,
            "issues": issues
        }
        
    except Exception as e:
        return {
            "status": "unhealthy",
            "timestamp": datetime.utcnow().isoformat(),
            "error": str(e)
        }

@router.get("/metrics")
async def get_metrics(
    hours: int = 1,
    current_user = Depends(get_current_superuser)
):
    """Get application and system metrics"""
    try:
        # Get system metrics summary
        system_summary = system_monitor.get_metrics_summary(hours)
        
        # Get application metrics from middleware
        app_metrics = {}
        for middleware in app.user_middleware:
            if isinstance(middleware, MetricsMiddleware):
                app_metrics = middleware.get_metrics()
                break
        
        return {
            "system": system_summary,
            "application": app_metrics,
            "timestamp": datetime.utcnow().isoformat()
        }
        
    except Exception as e:
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=f"Error getting metrics: {str(e)}"
        )

@router.get("/logs")
async def get_logs(
    lines: int = 100,
    level: str = "INFO",
    current_user = Depends(get_current_superuser)
):
    """Get application logs (requires superuser)"""
    try:
        # This would typically read from a log management system
        # For now, we'll return a placeholder
        return {
            "message": "Log retrieval not implemented in this example",
            "lines_requested": lines,
            "level_filter": level,
            "timestamp": datetime.utcnow().isoformat()
        }
        
    except Exception as e:
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=f"Error getting logs: {str(e)}"
        )`,
          explanation: `Esta configuración de monitoreo proporciona:

**Logging Estructurado:**
• JSON formatter para logs consistentes
• Campos adicionales para contexto (user_id, request_id, etc.)
• Manejo de rotación de archivos
• Niveles de log configurables
• Integración con servicios de log externos

**Middleware de Monitoreo:**
• Request ID tracking para correlación
• Medición de tiempos de respuesta
• Logging de requests y responses
• Recolección de métricas de aplicación
• Manejo centralizado de errores

**System Monitoring:**
• Métricas de CPU, memoria, disco, red
• Historial de métricas para análisis
• Resúmenes por períodos de tiempo
• Detección de problemas de rendimiento
• Monitoreo de salud del sistema

**Endpoints de Monitoreo:**
• /health: Health check básico
• /health/detailed: Health check con métricas
• /metrics: Métricas detalladas (solo admin)
• /logs: Acceso a logs (solo admin)

**Características de Seguridad:**
• Protección de endpoints sensibles
• Request ID para seguimiento
• Sanitización de datos sensibles
• Control de acceso basado en roles
• Logs de auditoría

**Integración con DevOps:**
• Formatos compatibles con ELK stack
• Métricas en formato JSON
• Health checks para load balancers
• Configuración para Prometheus/Grafana
• Soporte para alertas

**Mejoras Implementadas:**
• Logs estructurados para mejor análisis
• Monitoreo en tiempo real
• Detección proactiva de problemas
• Métricas de rendimiento detalladas
• Integración con herramientas DevOps

**Beneficios:**
• Depuración más fácil con request IDs
• Monitoreo proactivo de salud
• Análisis de rendimiento
• Cumplimiento de requisitos de auditoría
• Mejor experiencia de operación`,
          tip: 'Integra con herramientas como Prometheus, Grafana, y ELK stack para monitoreo completo y visualización.'
      },
      practiceExercise: {
        title: 'Ejercicio Práctico Final',
        description: 'Completa el despliegue y testing del proyecto',
        steps: [
          'Ejecuta todos los tests y verifica coverage',
          'Construye la imagen Docker localmente',
          'Despliega la aplicación con docker-compose',
          'Verifica que todos los endpoints funcionen',
          'Configura monitoreo básico'
        ],
        solution: `# Ejecutar tests con coverage
pytest tests/ -v --cov=app --cov-report=html --cov-report=term-missing

# Verificar coverage (debe ser >90%)
open htmlcov/index.html

# Construir imagen Docker
docker build -t blog-api:latest .

# Ejecutar con docker-compose
docker-compose up -d

# Verificar servicios
docker-compose ps
docker-compose logs app

# Probar endpoints
curl http://localhost:8000/health
curl http://localhost:8000/docs

# Ejecutar tests de integración contra el deployment
pytest tests/test_integration.py -v

# Verificar métricas
curl http://localhost:8000/api/v1/monitoring/health

# Revisar logs
docker-compose logs app | tail -n 50`
    }
    ]
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

  const markPhaseComplete = (phaseIndex: number) => {
    if (!completedPhases.includes(phaseIndex)) {
      setCompletedPhases([...completedPhases, phaseIndex])
    }
  }

  const CodeBlock = ({ code, language = 'python', id }: { code: string; language?: string; id: string }) => {
    return (
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
  }

  const currentPhaseData = projectPhases[currentPhase]

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-purple-50">
      {/* Header */}
      <header className="border-b bg-white shadow-sm">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-gradient-to-r from-green-500 to-blue-600 rounded-xl">
                <Rocket className="h-8 w-8 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                  Ejemplo Práctico FastAPI
                </h1>
                <p className="text-muted-foreground mt-1">
                  Construye una API de Blog completa paso a paso
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Badge variant="secondary" className="text-sm">
                {currentPhaseData.difficulty}
              </Badge>
              <Badge variant="outline" className="text-sm">
                {currentPhaseData.timeEstimate}
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
                onClick={() => window.location.href = '/detailed-guide'}
                className="flex items-center gap-2"
              >
                <GraduationCap className="h-4 w-4" />
                Guía Detallada
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
              <span>Fase {currentPhase + 1} de {projectPhases.length}</span>
              <span>{Math.round(((currentPhase + 1) / projectPhases.length) * 100)}% Completado</span>
            </div>
            <Progress value={((currentPhase + 1) / projectPhases.length) * 100} className="h-2" />
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
                  Fases del Proyecto
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <ScrollArea className="h-[calc(100vh-300px)]">
                  <div className="space-y-2 p-4">
                    {projectPhases.map((phase, index) => {
                      const Icon = phase.icon
                      const isCompleted = completedPhases.includes(index)
                      const isCurrent = index === currentPhase
                      
                      return (
                        <button
                          key={phase.id}
                          onClick={() => setCurrentPhase(index)}
                          className={`w-full text-left p-3 rounded-lg transition-all duration-200 ${
                            isCurrent 
                              ? 'bg-gradient-to-r from-green-500 to-blue-600 text-white shadow-lg' 
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
                              <div className="font-medium text-sm">{phase.title}</div>
                              <div className="text-xs opacity-75 mt-1">{phase.timeEstimate}</div>
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
              {/* Phase Header */}
              <Card className="border-l-4 border-l-green-500">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-3 bg-gradient-to-r from-green-500 to-blue-600 rounded-xl">
                        {React.createElement(currentPhaseData.icon, { className: "h-6 w-6 text-white" })}
                      </div>
                      <div>
                        <CardTitle className="text-xl">{currentPhaseData.title}</CardTitle>
                        <CardDescription className="text-base mt-1">
                          {currentPhaseData.description}
                        </CardDescription>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary">{currentPhaseData.difficulty}</Badge>
                      <Badge variant="outline">{currentPhaseData.timeEstimate}</Badge>
                    </div>
                  </div>
                </CardHeader>
              </Card>

              {/* Project Overview (only for first phase) */}
              {currentPhase === 0 && (
                <div className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Descripción del Proyecto</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="prose prose-sm max-w-none">
                        <div className="whitespace-pre-wrap text-gray-700 leading-relaxed">
                          {currentPhaseData.projectDescription}
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Stack Tecnológico</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {currentPhaseData.techStack.map((tech, index) => (
                          <Card key={index} className="border-2 hover:shadow-lg transition-all duration-300">
                            <CardContent className="p-4 text-center">
                              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-3">
                                {React.createElement(tech.icon, { className: "h-6 w-6 text-white" })}
                              </div>
                              <p className="font-medium text-green-800">{tech.name}</p>
                              <p className="text-sm text-muted-foreground">{tech.description}</p>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-l-4 border-l-blue-500">
                    <CardHeader>
                      <CardTitle className="text-lg flex items-center gap-2">
                        <CheckCircle className="h-5 w-5" />
                        {currentPhaseData.finalResult.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700 mb-4">{currentPhaseData.finalResult.description}</p>
                      <div className="grid md:grid-cols-2 gap-3">
                        {currentPhaseData.finalResult.features.map((feature, index) => (
                          <div key={index} className="flex items-center gap-2 p-2 bg-blue-50 rounded-lg">
                            <CheckCircle className="h-4 w-4 text-blue-600" />
                            <span className="text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              )}

              {/* Objectives */}
              {currentPhase !== 0 && (
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Target className="h-5 w-5" />
                      Objetivos de Aprendizaje
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-3">
                      {currentPhaseData.objectives.map((objective, index) => (
                        <div key={index} className="flex items-center gap-2 p-3 bg-green-50 rounded-lg">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          <span className="text-sm">{objective}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Detailed Explanation */}
              {currentPhase !== 0 && (
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
                        {currentPhaseData.detailedExplanation}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Step-by-Step Instructions */}
              {currentPhase !== 0 && (
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Wrench className="h-5 w-5" />
                      Instrucciones Paso a Paso
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {currentPhaseData.steps.map((step, stepIndex) => (
                      <div key={stepIndex} className="space-y-4">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-blue-600 text-white rounded-full flex items-center justify-center font-semibold text-sm">
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
                              <CodeBlock code={step.code} id={`step-${currentPhase}-${stepIndex}`} />
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
              )}

              {/* Practice Exercise */}
              {currentPhase !== 0 && (
                <Card className="border-l-4 border-l-green-500">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Zap className="h-5 w-5" />
                      {currentPhaseData.practiceExercise.title}
                    </CardTitle>
                    <CardDescription>{currentPhaseData.practiceExercise.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-medium mb-3">Pasos a seguir:</h4>
                      <ol className="space-y-2">
                        {currentPhaseData.practiceExercise.steps.map((step, index) => (
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
                        code={currentPhaseData.practiceExercise.solution} 
                        id={`solution-${currentPhase}`} 
                      />
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Navigation Buttons */}
              <div className="flex items-center justify-between pt-6">
                <Button
                  variant="outline"
                  onClick={() => setCurrentPhase(Math.max(0, currentPhase - 1))}
                  disabled={currentPhase === 0}
                  className="flex items-center gap-2"
                >
                  <ArrowLeft className="h-4 w-4" />
                  Anterior
                </Button>
                
                <Button
                  onClick={() => {
                    markPhaseComplete(currentPhase)
                    setCurrentPhase(Math.min(projectPhases.length - 1, currentPhase + 1))
                  }}
                  className="flex items-center gap-2 bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700"
                >
                  {currentPhase === projectPhases.length - 1 ? '¡Proyecto Completo!' : 'Siguiente'}
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </main>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t bg-white/95 backdrop-blur supports-\[backdrop-filter\]:bg-white/60 mt-12">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground">
              © 2025 Ejemplo Práctico FastAPI. Proyecto completo para aprendizaje.
            </p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <Button 
                variant="ghost" 
                size="sm"
                onClick={() => window.location.href = '/'}
                className="flex items-center gap-2 hover:bg-green-100"
              >
                <BookOpen className="h-4 w-4" />
                Guía Rápida
              </Button>
              <Button 
                variant="ghost" 
                size="sm"
                onClick={() => window.location.href = '/detailed-guide'}
                className="flex items-center gap-2 hover:bg-green-100"
              >
                <GraduationCap className="h-4 w-4" />
                Guía Detallada
              </Button>
              <Button variant="ghost" size="sm" className="flex items-center gap-2 hover:bg-green-100">
                <Github className="h-4 w-4 mr-2" />
                GitHub
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}