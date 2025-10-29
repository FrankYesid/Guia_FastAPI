'use client';

import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Copy, CheckCircle, ExternalLink, Github, Play, Sparkles, Code, Zap, BookOpen, Rocket } from 'lucide-react';

export default function FastAPIGuide() {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const copyToClipboard = async (code: string, id: string) => {
    try {
      await navigator.clipboard.writeText(code);
      setCopiedCode(id);
      setTimeout(() => setCopiedCode(null), 2000);
    } catch (err) {
      console.error('Error al copiar código:', err);
    }
  };

  const CodeBlock = ({ code, language, id }: { code: string; language: string; id: string }) => (
    <div className="relative">
      <Button
        variant="ghost"
        size="sm"
        className="absolute right-2 top-2 z-10 glass hover:bg-white/20"
        onClick={() => copyToClipboard(code, id)}
      >
        {copiedCode === id ? (
          <CheckCircle className="h-4 w-4 text-green-400" />
        ) : (
          <Copy className="h-4 w-4 text-white/80" />
        )}
      </Button>
      <SyntaxHighlighter
        language={language}
        style={vscDarkPlus}
        customStyle={{
          margin: 0,
          borderRadius: '0.75rem',
          fontSize: '0.875rem',
          background: 'rgba(0, 0, 0, 0.3)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
        }}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-700 animate-gradient relative overflow-hidden">
      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Header */}
      <header className="glass border-b border-white/20 backdrop-blur-lg sticky top-0 z-50">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
                <Sparkles className="h-6 w-6 text-yellow-300 animate-pulse" />
                <h1 className="text-3xl md:text-4xl font-bold gradient-text">
                  Guía Completa de FastAPI
                </h1>
                <Sparkles className="h-6 w-6 text-yellow-300 animate-pulse" />
              </div>
              <p className="text-lg text-white/90 font-medium">
                Aprende a construir APIs modernas y eficientes con Python 🚀
              </p>
            </div>
            <div className="flex gap-3">
              <Button className="glass hover:bg-white/20 text-white border-white/30 btn-glow">
                <Github className="h-4 w-4 mr-2" />
                GitHub
              </Button>
              <Button className="bg-gradient-to-r from-pink-500 to-violet-500 hover:from-pink-600 hover:to-violet-600 text-white border-0 btn-glow animate-pulse-glow">
                <Play className="h-4 w-4 mr-2" />
                Probar Ejemplos
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <div className="container mx-auto px-4 py-8">
        <div className="glass rounded-2xl p-8 mb-8 text-center neon-border">
          <div className="flex justify-center mb-4">
            <div className="flex items-center gap-2 bg-white/10 rounded-full px-4 py-2 glass">
              <Zap className="h-5 w-5 text-yellow-300" />
              <span className="text-white font-semibold">Aprende FastAPI de forma divertida</span>
              <Zap className="h-5 w-5 text-yellow-300" />
            </div>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 neon-text">
            Domina el framework más moderno para crear APIs en Python
          </h2>
          <p className="text-lg text-white/80 max-w-3xl mx-auto">
            Desde los conceptos básicos hasta el despliegue en producción. 
            ¡Con ejemplos prácticos y un diseño que te hará amar programar!
          </p>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="container mx-auto px-4 py-4">
        <div className="glass rounded-full p-1 mb-6">
          <div className="flex justify-between items-center text-white/80 text-sm px-4 py-2">
            <span>¡Comienza tu viaje con FastAPI!</span>
            <div className="flex items-center gap-2">
              <div className="w-32 h-2 bg-white/20 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-green-400 to-blue-500 rounded-full animate-pulse" style={{width: '12.5%'}}></div>
              </div>
              <span>12.5%</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-4 pb-8">
        <Tabs defaultValue="introduccion" className="w-full">
          <TabsList className="grid w-full grid-cols-8 mb-8 glass p-1 rounded-xl border border-white/20">
            <TabsTrigger value="introduccion" className="glass data-[state=active]:bg-white/20 text-white hover:bg-white/10 transition-all duration-300">
              <div className="flex flex-col items-center gap-1">
                <BookOpen className="h-4 w-4" />
                <span className="text-xs">1. Intro</span>
              </div>
            </TabsTrigger>
            <TabsTrigger value="instalacion" className="glass data-[state=active]:bg-white/20 text-white hover:bg-white/10 transition-all duration-300">
              <div className="flex flex-col items-center gap-1">
                <Code className="h-4 w-4" />
                <span className="text-xs">2. Instal</span>
              </div>
            </TabsTrigger>
            <TabsTrigger value="estructura" className="glass data-[state=active]:bg-white/20 text-white hover:bg-white/10 transition-all duration-300">
              <div className="flex flex-col items-center gap-1">
                <div className="h-4 w-4">📁</div>
                <span className="text-xs">3. Estruc</span>
              </div>
            </TabsTrigger>
            <TabsTrigger value="endpoints" className="glass data-[state=active]:bg-white/20 text-white hover:bg-white/10 transition-all duration-300">
              <div className="flex flex-col items-center gap-1">
                <div className="h-4 w-4">🔌</div>
                <span className="text-xs">4. Endpoints</span>
              </div>
            </TabsTrigger>
            <TabsTrigger value="pydantic" className="glass data-[state=active]:bg-white/20 text-white hover:bg-white/10 transition-all duration-300">
              <div className="flex flex-col items-center gap-1">
                <div className="h-4 w-4">🔍</div>
                <span className="text-xs">5. Pydantic</span>
              </div>
            </TabsTrigger>
            <TabsTrigger value="database" className="glass data-[state=active]:bg-white/20 text-white hover:bg-white/10 transition-all duration-300">
              <div className="flex flex-col items-center gap-1">
                <div className="h-4 w-4">🗄️</div>
                <span className="text-xs">6. BD</span>
              </div>
            </TabsTrigger>
            <TabsTrigger value="documentacion" className="glass data-[state=active]:bg-white/20 text-white hover:bg-white/10 transition-all duration-300">
              <div className="flex flex-col items-center gap-1">
                <div className="h-4 w-4">📚</div>
                <span className="text-xs">7. Docs</span>
              </div>
            </TabsTrigger>
            <TabsTrigger value="despliegue" className="glass data-[state=active]:bg-white/20 text-white hover:bg-white/10 transition-all duration-300">
              <div className="flex flex-col items-center gap-1">
                <Rocket className="h-4 w-4" />
                <span className="text-xs">8. Deploy</span>
              </div>
            </TabsTrigger>
          </TabsList>

          {/* 1. Introducción a FastAPI */}
          <TabsContent value="introduccion">
            <Card className="glass border-white/20 card-hover">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-white">
                  <span>1. Introducción a FastAPI</span>
                  <Badge className="bg-gradient-to-r from-pink-500 to-violet-500 text-white border-0">
                    Conceptos Fundamentales
                  </Badge>
                </CardTitle>
                <CardDescription className="text-white/80">
                  Descubre qué es FastAPI y por qué se ha convertido en el framework preferido para construir APIs modernas en Python
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="glass rounded-xl p-6">
                    <h3 className="text-xl font-semibold mb-3 text-white flex items-center gap-2">
                      <BookOpen className="h-5 w-5 text-yellow-300" />
                      ¿Qué es FastAPI?
                    </h3>
                    <p className="text-white/90 mb-4">
                      FastAPI es un framework web moderno y de alto rendimiento para construir APIs con Python 3.6+ 
                      basado en anotaciones de tipo estándar de Python.
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-400" />
                        <span className="text-white/90">Alto rendimiento: comparable con NodeJS y Go</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-400" />
                        <span className="text-white/90">Rápido de programar: aumenta la velocidad 2-3x</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-400" />
                        <span className="text-white/90">Fewer bugs: reduce aproximadamente el 40% de errores</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-400" />
                        <span className="text-white/90">Intuitivo: excelente soporte para editores</span>
                      </div>
                    </div>
                  </div>
                  <div className="glass rounded-xl p-6">
                    <h3 className="text-xl font-semibold mb-3 text-white flex items-center gap-2">
                      <Zap className="h-5 w-5 text-yellow-300" />
                      Ventajas Clave
                    </h3>
                    <div className="space-y-3">
                      <Card className="glass border-white/10">
                        <CardHeader className="pb-2">
                          <CardTitle className="text-sm text-white">Documentación Automática</CardTitle>
                        </CardHeader>
                        <CardContent className="pt-0">
                          <p className="text-xs text-white/80">
                            Genera automáticamente documentación interactiva con Swagger UI y ReDoc
                          </p>
                        </CardContent>
                      </Card>
                      <Card className="glass border-white/10">
                        <CardHeader className="pb-2">
                          <CardTitle className="text-sm text-white">Tipado Fuerte</CardTitle>
                        </CardHeader>
                        <CardContent className="pt-0">
                          <p className="text-xs text-white/80">
                            Utiliza Pydantic para validación de datos y anotaciones de tipo
                          </p>
                        </CardContent>
                      </Card>
                      <Card className="glass border-white/10">
                        <CardHeader className="pb-2">
                          <CardTitle className="text-sm text-white">Asíncrono por Defecto</CardTitle>
                        </CardHeader>
                        <CardContent className="pt-0">
                          <p className="text-xs text-white/80">
                            Soporte nativo para async/await y alto rendimiento
                          </p>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </div>

                <Separator className="bg-white/20" />

                <div>
                  <h3 className="text-xl font-semibold mb-3 text-white flex items-center gap-2">
                    <div className="h-5 w-5">📊</div>
                    Comparación con Otros Frameworks
                  </h3>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse border border-white/20 glass rounded-xl overflow-hidden">
                      <thead>
                        <tr className="bg-white/10">
                          <th className="border border-white/20 px-4 py-2 text-left text-white">Característica</th>
                          <th className="border border-white/20 px-4 py-2 text-left text-white">FastAPI</th>
                          <th className="border border-white/20 px-4 py-2 text-left text-white">Flask</th>
                          <th className="border border-white/20 px-4 py-2 text-left text-white">Django</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="hover:bg-white/5 transition-colors">
                          <td className="border border-white/20 px-4 py-2 text-white/90">Rendimiento</td>
                          <td className="border border-white/20 px-4 py-2 text-green-400 font-semibold">Muy Alto</td>
                          <td className="border border-white/20 px-4 py-2 text-yellow-400">Medio</td>
                          <td className="border border-white/20 px-4 py-2 text-orange-400">Medio-Bajo</td>
                        </tr>
                        <tr className="hover:bg-white/5 transition-colors">
                          <td className="border border-white/20 px-4 py-2 text-white/90">Curva de Aprendizaje</td>
                          <td className="border border-white/20 px-4 py-2 text-green-400">Baja-Media</td>
                          <td className="border border-white/20 px-4 py-2 text-green-400">Muy Baja</td>
                          <td className="border border-white/20 px-4 py-2 text-red-400">Alta</td>
                        </tr>
                        <tr className="hover:bg-white/5 transition-colors">
                          <td className="border border-white/20 px-4 py-2 text-white/90">Documentación Auto</td>
                          <td className="border border-white/20 px-4 py-2 text-green-400">✓ Sí</td>
                          <td className="border border-white/20 px-4 py-2 text-red-400">✗ No</td>
                          <td className="border border-white/20 px-4 py-2 text-red-400">✗ No</td>
                        </tr>
                        <tr className="hover:bg-white/5 transition-colors">
                          <td className="border border-white/20 px-4 py-2 text-white/90">Validación de Datos</td>
                          <td className="border border-white/20 px-4 py-2 text-green-400">✓ Integrada</td>
                          <td className="border border-white/20 px-4 py-2 text-red-400">✗ Manual</td>
                          <td className="border border-white/20 px-4 py-2 text-yellow-400">✓ Básica</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3 text-white flex items-center gap-2">
                    <Code className="h-5 w-5 text-yellow-300" />
                    Ejemplo Básico
                  </h3>
                  <CodeBlock
                    code={`from fastapi import FastAPI

app = FastAPI()

@app.get("/")
async def read_root():
    return {"message": "¡Hola, FastAPI!"}

@app.get("/items/{item_id}")
async def read_item(item_id: int, q: str | None = None):
    return {"item_id": item_id, "q": q}`}
                    language="python"
                    id="intro-example"
                  />
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* 2. Instalación y Configuración */}
          <TabsContent value="instalacion">
            <Card className="glass border-white/20 card-hover">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-white">
                  <span>2. Instalación y Configuración</span>
                  <Badge className="bg-gradient-to-r from-green-500 to-teal-500 text-white border-0">
                    Primeros Pasos
                  </Badge>
                </CardTitle>
                <CardDescription className="text-white/80">
                  Configura tu entorno de desarrollo y ejecuta tu primer servidor FastAPI
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="glass rounded-xl p-6">
                    <h3 className="text-lg font-semibold mb-3 text-white flex items-center gap-2">
                      <div className="h-5 w-5">🔧</div>
                      Requisitos Previos
                    </h3>
                    <ul className="space-y-2 text-white/90">
                      <li>• Python 3.6 o superior</li>
                      <li>• pip (gestor de paquetes de Python)</li>
                      <li>• Un editor de código (VSCode, PyCharm, etc.)</li>
                    </ul>
                  </div>
                  <div className="glass rounded-xl p-6">
                    <h3 className="text-lg font-semibold mb-3 text-white flex items-center gap-2">
                      <div className="h-5 w-5">✅</div>
                      Verificar Python
                    </h3>
                    <CodeBlock
                      code="python --version"
                      language="bash"
                      id="check-python"
                    />
                  </div>
                </div>

                <Separator className="bg-white/20" />

                <div>
                  <h3 className="text-xl font-semibold mb-3 text-white flex items-center gap-2">
                    <div className="h-5 w-5">🐍</div>
                    1. Crear Entorno Virtual
                  </h3>
                  <p className="text-white/80 mb-4">
                    Es una buena práctica crear un entorno virtual para cada proyecto:
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="glass rounded-xl p-4">
                      <h4 className="font-medium mb-2 text-white">Windows</h4>
                      <CodeBlock
                        code={`python -m venv venv
venv\\Scripts\\activate`}
                        language="bash"
                        id="venv-windows"
                      />
                    </div>
                    <div className="glass rounded-xl p-4">
                      <h4 className="font-medium mb-2 text-white">macOS/Linux</h4>
                      <CodeBlock
                        code={`python3 -m venv venv
source venv/bin/activate`}
                        language="bash"
                        id="venv-unix"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3 text-white flex items-center gap-2">
                    <div className="h-5 w-5">📦</div>
                    2. Instalar FastAPI y Uvicorn
                  </h3>
                  <p className="text-white/80 mb-4">
                    Instala FastAPI y Uvicorn (el servidor ASGI):
                  </p>
                  <CodeBlock
                    code={`pip install fastapi
pip install uvicorn[standard]`}
                    language="bash"
                    id="install-fastapi"
                  />
                  <div className="mt-2 p-4 glass rounded-xl">
                    <h4 className="font-medium mb-2 text-white">Nota importante:</h4>
                    <p className="text-sm text-white/80">
                      La opción [standard] incluye uvicorn con extras recomendados para mejor rendimiento.
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3 text-white flex items-center gap-2">
                    <div className="h-5 w-5">📝</div>
                    3. Crear Primer Archivo
                  </h3>
                  <p className="text-white/80 mb-4">
                    Crea un archivo llamado main.py:
                  </p>
                  <CodeBlock
                    code={`from fastapi import FastAPI

app = FastAPI()

@app.get("/")
async def root():
    return {"message": "¡Hola, FastAPI!"}`}
                    language="python"
                    id="first-file"
                  />
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3 text-white flex items-center gap-2">
                    <div className="h-5 w-5">🚀</div>
                    4. Ejecutar el Servidor
                  </h3>
                  <p className="text-white/80 mb-4">
                    Inicia el servidor con uvicorn:
                  </p>
                  <CodeBlock
                    code="uvicorn main:app --reload"
                    language="bash"
                    id="run-server"
                  />
                  <div className="mt-4 p-4 glass rounded-xl">
                    <h4 className="font-medium mb-2 text-white">Explicación del comando:</h4>
                    <ul className="space-y-1 text-sm text-white/80">
                      <li>• <code className="glass px-2 py-1 rounded text-white">main</code>: el archivo main.py</li>
                      <li>• <code className="glass px-2 py-1 rounded text-white">app</code>: el objeto creado dentro de main.py</li>
                      <li>• <code className="glass px-2 py-1 rounded text-white">--reload</code>: recarga automáticamente al cambiar el código</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3 text-white flex items-center gap-2">
                    <div className="h-5 w-5">🌐</div>
                    5. Verificar el Servidor
                  </h3>
                  <p className="text-white/80 mb-4">
                    Abre tu navegador en las siguientes direcciones:
                  </p>
                  <div className="space-y-3">
                    <div className="glass rounded-xl p-4 flex items-center gap-3">
                      <ExternalLink className="h-5 w-5 text-green-400" />
                      <a href="http://127.0.0.1:8000" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-300 font-medium">
                        http://127.0.0.1:8000
                      </a>
                      <span className="text-white/70">- Verás {"{\"message\": \"¡Hola, FastAPI!\"}"}</span>
                    </div>
                    <div className="glass rounded-xl p-4 flex items-center gap-3">
                      <ExternalLink className="h-5 w-5 text-blue-400" />
                      <a href="http://127.0.0.1:8000/docs" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 font-medium">
                        http://127.0.0.1:8000/docs
                      </a>
                      <span className="text-white/70">- Documentación interactiva (Swagger UI)</span>
                    </div>
                    <div className="glass rounded-xl p-4 flex items-center gap-3">
                      <ExternalLink className="h-5 w-5 text-purple-400" />
                      <a href="http://127.0.0.1:8000/redoc" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300 font-medium">
                        http://127.0.0.1:8000/redoc
                      </a>
                      <span className="text-white/70">- Documentación alternativa (ReDoc)</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* 3. Estructura del Proyecto */}
          <TabsContent value="estructura">
            <Card className="glass border-white/20 card-hover">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-white">
                  <span>3. Estructura del Proyecto</span>
                  <Badge className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white border-0">
                    Organización
                  </Badge>
                </CardTitle>
                <CardDescription className="text-white/80">
                  Aprende a organizar tu proyecto FastAPI de manera escalable y mantenible
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="glass rounded-xl p-6">
                  <h3 className="text-xl font-semibold mb-3 text-white flex items-center gap-2">
                    <div className="h-5 w-5">📁</div>
                    Estructura Recomendada
                  </h3>
                  <p className="text-white/80 mb-4">
                    Para proyectos medianos y grandes, se recomienda la siguiente estructura:
                  </p>
                  <CodeBlock
                    code={`my_fastapi_project/
├── app/
│   ├── __init__.py
│   ├── main.py              # Punto de entrada principal
│   ├── core/                # Configuración central
│   │   ├── __init__.py
│   │   ├── config.py        # Configuraciones
│   │   └── database.py      # Conexión a base de datos
│   ├── api/                 # Rutas de la API
│   │   ├── __init__.py
│   │   ├── v1/
│   │   │   ├── __init__.py
│   │   │   ├── endpoints/
│   │   │   │   ├── __init__.py
│   │   │   │   ├── items.py
│   │   │   │   └── users.py
│   │   │   └── api_v1.py    # Router principal v1
│   ├── models/              # Modelos de base de datos
│   │   ├── __init__.py
│   │   ├── item.py
│   │   └── user.py
│   ├── schemas/             # Modelos Pydantic
│   │   ├── __init__.py
│   │   ├── item.py
│   │   └── user.py
│   ├── crud/                # Operaciones CRUD
│   │   ├── __init__.py
│   │   ├── base.py
│   │   ├── item.py
│   │   └── user.py
│   ├── services/            # Lógica de negocio
│   │   ├── __init__.py
│   │   ├── item.py
│   │   └── user.py
│   └── utils/               # Utilidades varias
│       ├── __init__.py
│       └── security.py
├── tests/                   # Pruebas
│   ├── __init__.py
│   ├── conftest.py
│   └── test_api.py
├── .env                     # Variables de entorno
├── requirements.txt         # Dependencias
├── .gitignore
└── README.md`}
                    language="bash"
                    id="project-structure"
                  />
                </div>

                <Separator className="bg-white/20" />

                <div>
                  <h3 className="text-xl font-semibold mb-3 text-white flex items-center gap-2">
                    <div className="h-5 w-5">🔑</div>
                    Archivos Clave
                  </h3>
                  <div className="space-y-4">
                    <div className="glass rounded-xl p-4">
                      <h4 className="font-medium mb-2 text-white flex items-center gap-2">
                        <div className="h-4 w-4">🚪</div>
                        main.py - Punto de Entrada
                      </h4>
                      <CodeBlock
                        code={`from fastapi import FastAPI
from app.api.v1.api_v1 import api_router
from app.core.config import settings

app = FastAPI(
    title=settings.PROJECT_NAME,
    openapi_url=f"{settings.API_V1_STR}/openapi.json"
)

app.include_router(api_router, prefix=settings.API_V1_STR)

@app.get("/")
async def root():
    return {"message": "Bienvenido a mi API"}`}
                        language="python"
                        id="main-py"
                      />
                    </div>

                    <div className="glass rounded-xl p-4">
                      <h4 className="font-medium mb-2 text-white flex items-center gap-2">
                        <div className="h-4 w-4">⚙️</div>
                        config.py - Configuración
                      </h4>
                      <CodeBlock
                        code={`from typing import Optional
from pydantic import BaseSettings

class Settings(BaseSettings):
    PROJECT_NAME: str = "Mi API FastAPI"
    API_V1_STR: str = "/api/v1"
    
    # Database
    DATABASE_URL: str = "sqlite:///./app.db"
    
    # Security
    SECRET_KEY: str = "tu-secret-key-aqui"
    ACCESS_TOKEN_EXPIRE_MINUTES: int = 30
    
    class Config:
        env_file = ".env"

settings = Settings()`}
                        language="python"
                        id="config-py"
                      />
                    </div>

                    <div className="glass rounded-xl p-4">
                      <h4 className="font-medium mb-2 text-white flex items-center gap-2">
                        <div className="h-4 w-4">🛣️</div>
                        api_v1.py - Router Principal
                      </h4>
                      <CodeBlock
                        code={`from fastapi import APIRouter
from app.api.v1.endpoints import items, users

api_router = APIRouter()

api_router.include_router(items.router, prefix="/items", tags=["items"])
api_router.include_router(users.router, prefix="/users", tags=["users"])`}
                        language="python"
                        id="api-v1-py"
                      />
                    </div>

                    <div className="glass rounded-xl p-4">
                      <h4 className="font-medium mb-2 text-white flex items-center gap-2">
                        <div className="h-4 w-4">📦</div>
                        items.py - Endpoint de Ejemplo
                      </h4>
                      <CodeBlock
                        code={`from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app import crud, models, schemas
from app.core.database import get_db

router = APIRouter()

@router.get("/", response_model=list[schemas.Item])
def read_items(
    skip: int = 0,
    limit: int = 100,
    db: Session = Depends(get_db)
):
    items = crud.get_items(db, skip=skip, limit=limit)
    return items

@router.post("/", response_model=schemas.Item)
def create_item(
    item: schemas.ItemCreate,
    db: Session = Depends(get_db)
):
    return crud.create_item(db=db, item=item)}`}
                        language="python"
                        id="items-py"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3 text-white flex items-center gap-2">
                    <div className="h-5 w-5">⭐</div>
                    Buenas Prácticas
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <Card className="glass border-white/10">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-sm text-white flex items-center gap-2">
                          <div className="h-4 w-4">🔗</div>
                          Separación de Responsabilidades
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="pt-0">
                        <ul className="text-xs text-white/80 space-y-1">
                          <li>• Modelos: estructura de datos</li>
                          <li>• Schemas: validación y serialización</li>
                          <li>• CRUD: operaciones de base de datos</li>
                          <li>• Services: lógica de negocio</li>
                          <li>• API: endpoints HTTP</li>
                        </ul>
                      </CardContent>
                    </Card>
                    <Card className="glass border-white/10">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-sm text-white flex items-center gap-2">
                          <div className="h-4 w-4">📈</div>
                          Versionado de API
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="pt-0">
                        <ul className="text-xs text-white/80 space-y-1">
                          <li>• Usa prefijos como /api/v1/</li>
                          <li>• Mantén versiones antiguas</li>
                          <li>• Documenta cambios</li>
                          <li>• Planifica la depreciación</li>
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* 4. Creación de Endpoints */}
          <TabsContent value="endpoints">
            <Card className="glass border-white/20 card-hover">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-white">
                  <span>4. Creación de Endpoints</span>
                  <Badge className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white border-0">
                    Rutas y Métodos
                  </Badge>
                </CardTitle>
                <CardDescription className="text-white/80">
                  Aprende a crear endpoints RESTful con diferentes métodos HTTP y manejo de parámetros
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="glass rounded-xl p-6">
                  <h3 className="text-xl font-semibold mb-3 text-white flex items-center gap-2">
                    <div className="h-5 w-5">🔌</div>
                    Métodos HTTP Básicos
                  </h3>
                  <p className="text-white/80 mb-4">
                    FastAPI soporta todos los métodos HTTP estándar:
                  </p>
                  <CodeBlock
                    code={`from fastapi import FastAPI, HTTPException
from typing import Optional, List

app = FastAPI()

# Base de datos simulada
items_db = {
    1: {"name": "Laptop", "price": 999.99, "in_stock": True},
    2: {"name": "Mouse", "price": 29.99, "in_stock": True},
    3: {"name": "Keyboard", "price": 79.99, "in_stock": False}
}

# GET - Obtener todos los items
@app.get("/items/", response_model=List[dict])
async def get_all_items():
    return list(items_db.values())

# GET - Obtener un item específico
@app.get("/items/{item_id}", response_model=dict)
async def get_item(item_id: int):
    if item_id not in items_db:
        raise HTTPException(status_code=404, detail="Item no encontrado")
    return items_db[item_id]

# POST - Crear un nuevo item
@app.post("/items/", response_model=dict, status_code=201)
async def create_item(item: dict):
    new_id = max(items_db.keys()) + 1
    items_db[new_id] = item
    return {"id": new_id, **item}

# PUT - Actualizar un item existente
@app.put("/items/{item_id}", response_model=dict)
async def update_item(item_id: int, item: dict):
    if item_id not in items_db:
        raise HTTPException(status_code=404, detail="Item no encontrado")
    items_db[item_id] = item
    return {"id": item_id, **item}

# DELETE - Eliminar un item
@app.delete("/items/{item_id}")
async def delete_item(item_id: int):
    if item_id not in items_db:
        raise HTTPException(status_code=404, detail="Item no encontrado")
    del items_db[item_id]
    return {"message": "Item eliminado correctamente"}`}
                    language="python"
                    id="basic-methods"
                  />
                </div>

                <Separator className="bg-white/20" />

                <div>
                  <h3 className="text-xl font-semibold mb-3 text-white flex items-center gap-2">
                    <div className="h-5 w-5">⚙️</div>
                    Manejo de Parámetros
                  </h3>
                  <p className="text-white/80 mb-4">
                    FastAPI ofrece varias formas de manejar parámetros:
                  </p>
                  
                  <div className="space-y-4">
                    <div className="glass rounded-xl p-4">
                      <h4 className="font-medium mb-2 text-white flex items-center gap-2">
                        <div className="h-4 w-4">🛣️</div>
                        Parámetros de Ruta (Path Parameters)
                      </h4>
                      <CodeBlock
                        code={`from fastapi import FastAPI
from typing import Optional

app = FastAPI()

@app.get("/users/{user_id}")
async def get_user(user_id: int):
    return {"user_id": user_id, "message": f"Obteniendo usuario {user_id}"}

# Validación automática
@app.get("/products/{product_id}")
async def get_product(product_id: int, q: Optional[str] = None):
    if product_id < 1:
        return {"error": "El ID debe ser mayor que 0"}
    return {"product_id": product_id, "query": q}`}
                        language="python"
                        id="path-params"
                      />
                    </div>

                    <div className="glass rounded-xl p-4">
                      <h4 className="font-medium mb-2 text-white flex items-center gap-2">
                        <div className="h-4 w-4">❓</div>
                        Parámetros de Consulta (Query Parameters)
                      </h4>
                      <CodeBlock
                        code={`from fastapi import FastAPI, Query
from typing import Optional, List

app = FastAPI()

@app.get("/items/")
async def read_items(
    q: Optional[str] = Query(None, max_length=50),
    skip: int = Query(0, ge=0),
    limit: int = Query(100, ge=1, le=100),
    sort_by: Optional[str] = Query(None, regex="^(name|price|created_at)$")
):
    return {
        "query": q,
        "skip": skip,
        "limit": limit,
        "sort_by": sort_by
    }

# Parámetros obligatorios
@app.get("/search/")
async def search_items(
    query: str = Query(..., min_length=3),
    category: Optional[str] = None
):
    return {"query": query, "category": category}

# Listas de parámetros
@app.get("/filter/")
async def filter_items(
    tags: List[str] = Query([]),
    price_range: Optional[List[float]] = None
):
    return {"tags": tags, "price_range": price_range}`}
                        language="python"
                        id="query-params"
                      />
                    </div>

                    <div className="glass rounded-xl p-4">
                      <h4 className="font-medium mb-2 text-white flex items-center gap-2">
                        <div className="h-4 w-4">📦</div>
                        Cuerpo de la Petición (Request Body)
                      </h4>
                      <CodeBlock
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
async def create_item(item: Item):
    # FastAPI valida automáticamente los datos
    item_dict = item.dict()
    if item.tax:
        price_with_tax = item.price + item.tax
        item_dict.update({"price_with_tax": price_with_tax})
    return item_dict

# Body anidados
@app.put("/items/{item_id}")
async def update_item(
    item_id: int,
    item: Item,
    user: Optional[str] = Body(None),
    priority: int = Body(..., ge=1, le=5)
):
    return {
        "item_id": item_id,
        "item": item,
        "user": user,
        "priority": priority
    }

# Múltiples body parameters
@app.post("/users/")
async def create_user(
    user: dict = Body(..., example={"name": "John", "age": 30}),
    profile: dict = Body(..., example={"bio": "Developer", "location": "NYC"})
):
    return {"user": user, "profile": profile}`}
                        language="python"
                        id="body-params"
                      />
                    </div>
                  </div>
                </div>

                <div className="glass rounded-xl p-6">
                  <h3 className="text-xl font-semibold mb-3 text-white flex items-center gap-2">
                    <div className="h-5 w-5">⚠️</div>
                    Manejo de Errores
                  </h3>
                  <CodeBlock
                    code={`from fastapi import FastAPI, HTTPException, status
from fastapi.responses import JSONResponse

app = FastAPI()

items = {"foo": "The Foo Wrestlers"}

@app.get("/items/{item_id}")
async def read_item(item_id: str):
    if item_id not in items:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Item no encontrado",
            headers={"X-Error": "There goes my error"},
        )
    return {"item": items[item_id]}

# Excepciones personalizadas
class UnicornException(Exception):
    def __init__(self, name: str):
        self.name = name

@app.exception_handler(UnicornException)
async def unicorn_exception_handler(request, exc: UnicornException):
    return JSONResponse(
        status_code=418,
        content={"message": f"Oops! {exc.name} hizo algo mal."},
    )

@app.get("/unicorns/{name}")
async def read_unicorn(name: str):
    if name == "yolo":
        raise UnicornException(name=name)
    return {"unicorn_name": name}

# Validación de errores con Pydantic
from pydantic import BaseModel, ValidationError

class Item(BaseModel):
    name: str
    description: Optional[str] = None
    price: float
    tax: Optional[float] = None

@app.post("/items/")
async def create_item(item: Item):
    try:
        # La validación ocurre automáticamente
        return item
    except ValidationError as e:
        raise HTTPException(
            status_code=422,
            detail=e.errors()
        )`}
                    language="python"
                    id="error-handling"
                  />
                </div>

                <div className="glass rounded-xl p-6">
                  <h3 className="text-xl font-semibold mb-3 text-white flex items-center gap-2">
                    <div className="h-5 w-5">🍪</div>
                    Headers y Cookies
                  </h3>
                  <CodeBlock
                    code={`from fastapi import FastAPI, Header, Cookie
from typing import Optional

app = FastAPI()

@app.get("/headers/")
async def read_headers(
    user_agent: Optional[str] = Header(None),
    accept_language: Optional[str] = Header(None, alias="Accept-Language")
):
    return {
        "User-Agent": user_agent,
        "Accept-Language": accept_language
    }

@app.get("/cookies/")
async def read_cookies(
    session_id: Optional[str] = Cookie(None),
    preferences: Optional[str] = Cookie(None)
):
    return {
        "session_id": session_id,
        "preferences": preferences
    }

# Establecer cookies en la respuesta
from fastapi import Response

@app.post("/login/")
async def login(response: Response):
    response.set_cookie(
        key="session_id",
        value="abc123",
        httponly=True,
        max_age=1800,
        expires=1800
    )
    return {"message": "Login exitoso"}`}
                    language="python"
                    id="headers-cookies"
                  />
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* 5. Validación y Modelos con Pydantic */}
          <TabsContent value="pydantic">
            <Card className="glass border-white/20 card-hover">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-white">
                  <span>5. Validación y Modelos con Pydantic</span>
                  <Badge className="bg-gradient-to-r from-purple-500 to-pink-500 text-white border-0">
                    Tipado y Validación
                  </Badge>
                </CardTitle>
                <CardDescription className="text-white/80">
                  Aprende a usar Pydantic para validar datos y crear modelos robustos
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="glass rounded-xl p-6">
                  <h3 className="text-xl font-semibold mb-3 text-white flex items-center gap-2">
                    <div className="h-5 w-5">🔍</div>
                    Introducción a Pydantic
                  </h3>
                  <p className="text-white/80 mb-4">
                    Pydantic es una librería de validación de datos usando anotaciones de tipo de Python. 
                    FastAPI lo utiliza internamente para:
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-white/80 mb-4">
                    <li>Validar datos de entrada</li>
                    <li>Convertir tipos de datos</li>
                    <li>Generar documentación automática</li>
                    <li>Proporcionar autocompletado en editores</li>
                  </ul>
                  <CodeBlock
                    code={`from pydantic import BaseModel, EmailStr, Field
from typing import Optional, List
from datetime import datetime

class UserBase(BaseModel):
    email: EmailStr
    username: str = Field(..., min_length=3, max_length=20)
    full_name: Optional[str] = None
    age: Optional[int] = Field(None, ge=18, le=120)

class UserCreate(UserBase):
    password: str = Field(..., min_length=8)

class UserUpdate(BaseModel):
    email: Optional[EmailStr] = None
    username: Optional[str] = Field(None, min_length=3, max_length=20)
    full_name: Optional[str] = None
    age: Optional[int] = Field(None, ge=18, le=120)

class User(UserBase):
    id: int
    is_active: bool = True
    created_at: datetime
    
    class Config:
        orm_mode = True  # Permite leer datos desde ORMs`}
                    language="python"
                    id="pydantic-intro"
                  />
                </div>

                <Separator className="bg-white/20" />

                <div>
                  <h3 className="text-xl font-semibold mb-3 text-white flex items-center gap-2">
                    <div className="h-5 w-5">🛡️</div>
                    Validación Avanzada
                  </h3>
                  <div className="space-y-4">
                    <div className="glass rounded-xl p-4">
                      <h4 className="font-medium mb-2 text-white flex items-center gap-2">
                        <div className="h-4 w-4">✨</div>
                        Validadores Personalizados
                      </h4>
                      <CodeBlock
                        code={`from pydantic import BaseModel, validator
from typing import Optional

class User(BaseModel):
    name: str
    email: str
    age: Optional[int] = None
    
    @validator('name')
    def name_must_contain_space(cls, v):
        if ' ' not in v:
            raise ValueError('El nombre debe contener un espacio')
        return v.title()
    
    @validator('email')
    def email_must_be_valid(cls, v):
        if '@' not in v:
            raise ValueError('Email inválido')
        return v.lower()
    
    @validator('age')
    def age_must_be_reasonable(cls, v):
        if v is not None and (v < 0 or v > 150):
            raise ValueError('La edad debe estar entre 0 y 150')
        return v`}
                        language="python"
                        id="custom-validators"
                      />
                    </div>

                    <div className="glass rounded-xl p-4">
                      <h4 className="font-medium mb-2 text-white flex items-center gap-2">
                        <div className="h-4 w-4">🔤</div>
                        Validación con Expresiones Regulares</h4>
                      <CodeBlock
                        code={`from pydantic import BaseModel, Field, constr

class Product(BaseModel):
    name: constr(min_length=1, max_length=100)
    sku: constr(regex=r'^[A-Z]{2}-\\d{4}$')  # Formato: AB-1234
    price: float = Field(..., gt=0)
    description: Optional[str] = None
    
    # Ejemplos válidos:
    # name: "Laptop Dell"
    # sku: "DL-2024"
    # price: 999.99`}
                        language="python"
                        id="regex-validation"
                      />
                    </div>

                    <div>
                      <h4 className="font-medium mb-2">Campos Calculados</h4>
                      <CodeBlock
                        code={`from pydantic import BaseModel, validator
from datetime import datetime, date

class Person(BaseModel):
    first_name: str
    last_name: str
    birth_date: date
    
    @property
    def full_name(self) -> str:
        return f"{self.first_name} {self.last_name}"
    
    @property
    def age(self) -> int:
        today = date.today()
        return today.year - self.birth_date.year - (
            (today.month, today.day) < (self.birth_date.month, self.birth_date.day)
        )
    
    @validator('birth_date')
    def birth_date_not_in_future(cls, v):
        if v > date.today():
            raise ValueError('La fecha de nacimiento no puede estar en el futuro')
        return v`}
                        language="python"
                        id="computed-fields"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3">Modelos Anidados y Complejos</h3>
                  <CodeBlock
                    code={`from pydantic import BaseModel, HttpUrl
from typing import List, Optional, Dict
from enum import Enum

class Category(str, Enum):
    ELECTRONICS = "electronics"
    CLOTHING = "clothing"
    BOOKS = "books"

class Address(BaseModel):
    street: str
    city: str
    country: str
    postal_code: str

class Review(BaseModel):
    rating: int = Field(..., ge=1, le=5)
    comment: Optional[str] = None
    reviewer: str

class Product(BaseModel):
    name: str
    description: Optional[str] = None
    price: float = Field(..., gt=0)
    category: Category
    tags: List[str] = []
    images: List[HttpUrl] = []
    reviews: List[Review] = []
    metadata: Dict[str, str] = {}
    
    class Config:
        schema_extra = {
            "example": {
                "name": "Smartphone XYZ",
                "description": "Último modelo con cámara de alta resolución",
                "price": 699.99,
                "category": "electronics",
                "tags": ["smartphone", "tech", "mobile"],
                "images": ["https://example.com/image1.jpg"],
                "reviews": [
                    {
                        "rating": 5,
                        "comment": "Excelente producto",
                        "reviewer": "John Doe"
                    }
                ],
                "metadata": {"brand": "XYZ", "model": "2024"}
            }
        }

class Order(BaseModel):
    id: int
    products: List[Product]
    shipping_address: Address
    total_amount: float
    created_at: datetime`}
                    language="python"
                    id="nested-models"
                  />
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3">Integración con FastAPI</h3>
                  <CodeBlock
                    code={`from fastapi import FastAPI, HTTPException
from pydantic import BaseModel, EmailStr
from typing import List, Optional

app = FastAPI()

# Modelos Pydantic
class ItemBase(BaseModel):
    title: str
    description: Optional[str] = None
    price: float = Field(..., gt=0)

class ItemCreate(ItemBase):
    pass

class ItemUpdate(BaseModel):
    title: Optional[str] = None
    description: Optional[str] = None
    price: Optional[float] = Field(None, gt=0)

class Item(ItemBase):
    id: int
    owner_id: int
    
    class Config:
        orm_mode = True

class UserBase(BaseModel):
    email: EmailStr
    username: str = Field(..., min_length=3, max_length=20)

class UserCreate(UserBase):
    password: str = Field(..., min_length=8)

class User(UserBase):
    id: int
    is_active: bool = True
    items: List[Item] = []
    
    class Config:
        orm_mode = True

# Endpoints
@app.post("/users/", response_model=User)
async def create_user(user: UserCreate):
    # Lógica para crear usuario
    return user  # Simplificado para el ejemplo

@app.get("/users/{user_id}", response_model=User)
async def read_user(user_id: int):
    # Lógica para obtener usuario
    return {"id": user_id, "email": "user@example.com", "username": "test", "is_active": True}

@app.post("/users/{user_id}/items/", response_model=Item)
async def create_item_for_user(user_id: int, item: ItemCreate):
    # Lógica para crear item
    return {"id": 1, "owner_id": user_id, **item.dict()}

@app.get("/items/", response_model=List[Item])
async def read_items(skip: int = 0, limit: int = 100):
    # Lógica para obtener items
    return []  # Simplificado para el ejemplo`}
                    language="python"
                    id="fastapi-integration"
                  />
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3">Manejo de Archivos</h3>
                  <CodeBlock
                    code={`from fastapi import FastAPI, File, UploadFile, Form
from pydantic import BaseModel
from typing import Optional, List

app = FastAPI()

class ProfileCreate(BaseModel):
    username: str
    bio: Optional[str] = None

@app.post("/upload-profile/")
async def upload_profile(
    username: str = Form(...),
    bio: Optional[str] = Form(None),
    profile_pic: UploadFile = File(...),
    documents: List[UploadFile] = File([])
):
    # Validar archivo de imagen
    if not profile_pic.content_type.startswith("image/"):
        raise HTTPException(
            status_code=400,
            detail="El archivo debe ser una imagen"
        )
    
    # Procesar archivos
    contents = await profile_pic.read()
    
    # Guardar archivos (ejemplo)
    with open(f"uploads/{profile_pic.filename}", "wb") as f:
        f.write(contents)
    
    for doc in documents:
        doc_contents = await doc.read()
        with open(f"uploads/{doc.filename}", "wb") as f:
            f.write(doc_contents)
    
    return {
        "username": username,
        "bio": bio,
        "profile_pic": profile_pic.filename,
        "documents": [doc.filename for doc in documents]
    }

# Subir múltiples archivos
@app.post("/upload-multiple/")
async def upload_multiple_files(files: List[UploadFile]):
    uploaded_files = []
    
    for file in files:
        contents = await file.read()
        filename = file.filename
        
        # Validar tipo de archivo
        if file.content_type not in ["image/jpeg", "image/png", "application/pdf"]:
            raise HTTPException(
                status_code=400,
                detail=f"Tipo de archivo no soportado: {file.content_type}"
            )
        
        # Guardar archivo
        with open(f"uploads/{filename}", "wb") as f:
            f.write(contents)
        
        uploaded_files.append(filename)
    
    return {"uploaded_files": uploaded_files}`}
                    language="python"
                    id="file-handling"
                  />
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* 6. Conexión con Base de Datos */}
          <TabsContent value="database">
            <Card className="glass border-white/20 card-hover">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-white">
                  <span>6. Conexión con Base de Datos</span>
                  <Badge className="bg-gradient-to-r from-green-500 to-emerald-500 text-white border-0">
                    SQLAlchemy y CRUD
                  </Badge>
                </CardTitle>
                <CardDescription className="text-white/80">
                  Aprende a integrar FastAPI con bases de datos usando SQLAlchemy y operaciones CRUD
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="glass rounded-xl p-6">
                  <h3 className="text-xl font-semibold mb-3 text-white flex items-center gap-2">
                    <div className="h-5 w-5">🗄️</div>
                    Configuración de SQLAlchemy
                  </h3>
                  <p className="text-white/80 mb-4">
                    Primero, instala las dependencias necesarias:
                  </p>
                  <CodeBlock
                    code="pip install sqlalchemy alembic psycopg2-binary"
                    language="bash"
                    id="install-sqlalchemy"
                  />
                  <p className="text-white/80 mb-4">
                    Configura la conexión a la base de datos:
                  </p>
                  <CodeBlock
                    code={`from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
import os

# Configuración de la base de datos
DATABASE_URL = os.getenv("DATABASE_URL", "postgresql://user:password@localhost/dbname")

# Motor asíncrono para PostgreSQL
engine = create_engine(DATABASE_URL)

SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

# Base para los modelos
Base = declarative_base()

# Dependencia para obtener la sesión de la base de datos
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()`}
                    language="python"
                    id="sqlalchemy-config"
                  />
                </div>

                <Separator />

                <div>
                  <h3 className="text-xl font-semibold mb-3">Modelos de Base de Datos</h3>
                  <CodeBlock
                    code={`from sqlalchemy import Column, Integer, String, Boolean, DateTime, ForeignKey, Text
from sqlalchemy.orm import relationship
from sqlalchemy.sql import func
from app.core.database import Base

class User(Base):
    __tablename__ = "users"
    
    id = Column(Integer, primary_key=True, index=True)
    email = Column(String, unique=True, index=True, nullable=False)
    username = Column(String, unique=True, index=True, nullable=False)
    full_name = Column(String)
    hashed_password = Column(String, nullable=False)
    is_active = Column(Boolean, default=True)
    created_at = Column(DateTime(timezone=True), server_default=func.now())
    updated_at = Column(DateTime(timezone=True), onupdate=func.now())
    
    # Relaciones
    items = relationship("Item", back_populates="owner")
    posts = relationship("Post", back_populates="author")

class Item(Base):
    __tablename__ = "items"
    
    id = Column(Integer, primary_key=True, index=True)
    title = Column(String, index=True, nullable=False)
    description = Column(Text)
    price = Column(Integer, nullable=False)
    owner_id = Column(Integer, ForeignKey("users.id"))
    created_at = Column(DateTime(timezone=True), server_default=func.now())
    
    # Relaciones
    owner = relationship("User", back_populates="items")

class Post(Base):
    __tablename__ = "posts"
    
    id = Column(Integer, primary_key=True, index=True)
    title = Column(String, index=True, nullable=False)
    content = Column(Text, nullable=False)
    author_id = Column(Integer, ForeignKey("users.id"))
    published = Column(Boolean, default=False)
    created_at = Column(DateTime(timezone=True), server_default=func.now())
    updated_at = Column(DateTime(timezone=True), onupdate=func.now())
    
    # Relaciones
    author = relationship("User", back_populates="posts")
    comments = relationship("Comment", back_populates="post")

class Comment(Base):
    __tablename__ = "comments"
    
    id = Column(Integer, primary_key=True, index=True)
    content = Column(Text, nullable=False)
    post_id = Column(Integer, ForeignKey("posts.id"))
    author_id = Column(Integer, ForeignKey("users.id"))
    created_at = Column(DateTime(timezone=True), server_default=func.now())
    
    # Relaciones
    post = relationship("Post", back_populates="comments")
    author = relationship("User")`}
                    language="python"
                    id="database-models"
                  />
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3">Operaciones CRUD</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium mb-2">CRUD Base</h4>
                      <CodeBlock
                        code={`from typing import Generic, TypeVar, Type, Optional, List
from sqlalchemy.orm import Session
from sqlalchemy import and_

from app.core.database import Base

ModelType = TypeVar("ModelType", bound=Base)
CreateSchemaType = TypeVar("CreateSchemaType")
UpdateSchemaType = TypeVar("UpdateSchemaType")

class CRUDBase(Generic[ModelType, CreateSchemaType, UpdateSchemaType]):
    def __init__(self, model: Type[ModelType]):
        self.model = model

    def get(self, db: Session, id: int) -> Optional[ModelType]:
        return db.query(self.model).filter(self.model.id == id).first()

    def get_multi(
        self, db: Session, *, skip: int = 0, limit: int = 100
    ) -> List[ModelType]:
        return db.query(self.model).offset(skip).limit(limit).all()

    def create(self, db: Session, *, obj_in: CreateSchemaType) -> ModelType:
        obj_in_data = obj_in.dict()
        db_obj = self.model(**obj_in_data)
        db.add(db_obj)
        db.commit()
        db.refresh(db_obj)
        return db_obj

    def update(
        self, db: Session, *, db_obj: ModelType, obj_in: UpdateSchemaType
    ) -> ModelType:
        obj_data = db_obj.__dict__
        if isinstance(obj_in, dict):
            update_data = obj_in
        else:
            update_data = obj_in.dict(exclude_unset=True)
        for field in obj_data:
            if field in update_data:
                setattr(db_obj, field, update_data[field])
        db.add(db_obj)
        db.commit()
        db.refresh(db_obj)
        return db_obj

    def remove(self, db: Session, *, id: int) -> ModelType:
        obj = db.query(self.model).get(id)
        db.delete(obj)
        db.commit()
        return obj`}
                        language="python"
                        id="crud-base"
                      />
                    </div>

                    <div>
                      <h4 className="font-medium mb-2">CRUD para Usuarios</h4>
                      <CodeBlock
                        code={`from typing import Any, Dict, Optional, Union
from sqlalchemy.orm import Session
from sqlalchemy import or_

from app.core.security import get_password_hash, verify_password
from app.models.user import User
from app.schemas.user import UserCreate, UserUpdate
from app.crud.base import CRUDBase

class CRUDUser(CRUDBase[User, UserCreate, UserUpdate]):
    def get_by_email(self, db: Session, *, email: str) -> Optional[User]:
        return db.query(User).filter(User.email == email).first()

    def get_by_username(self, db: Session, *, username: str) -> Optional[User]:
        return db.query(User).filter(User.username == username).first()

    def create(self, db: Session, *, obj_in: UserCreate) -> User:
        db_obj = User(
            email=obj_in.email,
            username=obj_in.username,
            hashed_password=get_password_hash(obj_in.password),
            full_name=obj_in.full_name,
            is_active=obj_in.is_active,
        )
        db.add(db_obj)
        db.commit()
        db.refresh(db_obj)
        return db_obj

    def update(
        self, db: Session, *, db_obj: User, obj_in: Union[UserUpdate, Dict[str, Any]]
    ) -> User:
        if isinstance(obj_in, dict):
            update_data = obj_in
        else:
            update_data = obj_in.dict(exclude_unset=True)
        if update_data.get("password"):
            hashed_password = get_password_hash(update_data["password"])
            del update_data["password"]
            update_data["hashed_password"] = hashed_password
        return super().update(db, db_obj=db_obj, obj_in=update_data)

    def authenticate(self, db: Session, *, email: str, password: str) -> Optional[User]:
        user = self.get_by_email(db, email=email)
        if not user:
            return None
        if not verify_password(password, user.hashed_password):
            return None
        return user

    def is_active(self, user: User) -> bool:
        return user.is_active

    def is_superuser(self, user: User) -> bool:
        return user.is_superuser

    def search_users(
        self, db: Session, *, query: str, skip: int = 0, limit: int = 100
    ) -> List[User]:
        return (
            db.query(User)
            .filter(
                or_(
                    User.email.ilike(f"%{query}%"),
                    User.username.ilike(f"%{query}%"),
                    User.full_name.ilike(f"%{query}%"),
                )
            )
            .offset(skip)
            .limit(limit)
            .all()
        )

user = CRUDUser(User)`}
                        language="python"
                        id="crud-user"
                      />
                    </div>

                    <div>
                      <h4 className="font-medium mb-2">CRUD para Items</h4>
                      <CodeBlock
                        code={`from typing import List, Optional
from sqlalchemy.orm import Session
from sqlalchemy import and_, or_

from app.models.item import Item
from app.schemas.item import ItemCreate, ItemUpdate
from app.crud.base import CRUDBase

class CRUDItem(CRUDBase[Item, ItemCreate, ItemUpdate]):
    def create_with_owner(
        self, db: Session, *, obj_in: ItemCreate, owner_id: int
    ) -> Item:
        obj_in_data = obj_in.dict()
        db_obj = Item(**obj_in_data, owner_id=owner_id)
        db.add(db_obj)
        db.commit()
        db.refresh(db_obj)
        return db_obj

    def get_multi_by_owner(
        self, db: Session, *, owner_id: int, skip: int = 0, limit: int = 100
    ) -> List[Item]:
        return (
            db.query(Item)
            .filter(Item.owner_id == owner_id)
            .offset(skip)
            .limit(limit)
            .all()
        )

    def search_items(
        self,
        db: Session,
        *,
        query: Optional[str] = None,
        min_price: Optional[int] = None,
        max_price: Optional[int] = None,
        owner_id: Optional[int] = None,
        skip: int = 0,
        limit: int = 100,
    ) -> List[Item]:
        filters = []
        
        if query:
            filters.append(
                or_(
                    Item.title.ilike(f"%{query}%"),
                    Item.description.ilike(f"%{query}%"),
                )
            )
        
        if min_price is not None:
            filters.append(Item.price >= min_price)
        
        if max_price is not None:
            filters.append(Item.price <= max_price)
        
        if owner_id is not None:
            filters.append(Item.owner_id == owner_id)
        
        query_obj = db.query(Item)
        
        if filters:
            query_obj = query_obj.filter(and_(*filters))
        
        return query_obj.offset(skip).limit(limit).all()

item = CRUDItem(Item)`}
                        language="python"
                        id="crud-item"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3">Endpoints con Base de Datos</h3>
                  <CodeBlock
                    code={`from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session
from typing import List

from app.core.database import get_db
from app import crud, models, schemas
from app.core.security import get_current_user

router = APIRouter()

@router.post("/", response_model=schemas.Item)
def create_item(
    *,
    db: Session = Depends(get_db),
    item_in: schemas.ItemCreate,
    current_user: models.User = Depends(get_current_user)
):
    """
    Crear un nuevo item.
    """
    item = crud.item.create_with_owner(
        db=db, obj_in=item_in, owner_id=current_user.id
    )
    return item

@router.get("/", response_model=List[schemas.Item])
def read_items(
    db: Session = Depends(get_db),
    skip: int = 0,
    limit: int = 100,
    current_user: models.User = Depends(get_current_user)
):
    """
    Obtener items del usuario actual.
    """
    items = crud.item.get_multi_by_owner(
        db=db, owner_id=current_user.id, skip=skip, limit=limit
    )
    return items

@router.get("/{item_id}", response_model=schemas.Item)
def read_item(
    *,
    db: Session = Depends(get_db),
    item_id: int,
    current_user: models.User = Depends(get_current_user)
):
    """
    Obtener un item específico por ID.
    """
    item = crud.item.get(db=db, id=item_id)
    if not item:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Item no encontrado"
        )
    if item.owner_id != current_user.id:
        raise HTTPException(
            status_code=status.HTTP_403_FORBIDDEN,
            detail="No tienes permiso para acceder a este item"
        )
    return item

@router.put("/{item_id}", response_model=schemas.Item)
def update_item(
    *,
    db: Session = Depends(get_db),
    item_id: int,
    item_in: schemas.ItemUpdate,
    current_user: models.User = Depends(get_current_user)
):
    """
    Actualizar un item.
    """
    item = crud.item.get(db=db, id=item_id)
    if not item:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Item no encontrado"
        )
    if item.owner_id != current_user.id:
        raise HTTPException(
            status_code=status.HTTP_403_FORBIDDEN,
            detail="No tienes permiso para actualizar este item"
        )
    item = crud.item.update(db=db, db_obj=item, obj_in=item_in)
    return item

@router.delete("/{item_id}", response_model=schemas.Item)
def delete_item(
    *,
    db: Session = Depends(get_db),
    item_id: int,
    current_user: models.User = Depends(get_current_user)
):
    """
    Eliminar un item.
    """
    item = crud.item.get(db=db, id=item_id)
    if not item:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Item no encontrado"
        )
    if item.owner_id != current_user.id:
        raise HTTPException(
            status_code=status.HTTP_403_FORBIDDEN,
            detail="No tienes permiso para eliminar este item"
        )
    item = crud.item.remove(db=db, id=item_id)
    return item

@router.get("/search/", response_model=List[schemas.Item])
def search_items(
    *,
    db: Session = Depends(get_db),
    query: str = None,
    min_price: int = None,
    max_price: int = None,
    skip: int = 0,
    limit: int = 100,
    current_user: models.User = Depends(get_current_user)
):
    """
    Buscar items con filtros.
    """
    items = crud.item.search_items(
        db=db,
        query=query,
        min_price=min_price,
        max_price=max_price,
        owner_id=current_user.id,
        skip=skip,
        limit=limit
    )
    return items`}
                    language="python"
                    id="db-endpoints"
                  />
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3">Migraciones con Alembic</h3>
                  <p className="text-muted-foreground mb-4">
                    Instala Alembic y configura las migraciones:
                  </p>
                  <CodeBlock
                    code={`# Instalar alembic
pip install alembic

# Inicializar alembic
alembic init alembic

# Configurar alembic.ini
# Editar el archivo alembic.ini y cambiar la URL de la base de datos
sqlalchemy.url = postgresql://user:password@localhost/dbname

# Configurar env.py
# En alembic/env.py, importar tus modelos y Base
from app.models import Base
from app.core.database import DATABASE_URL

# Configurar target_metadata
target_metadata = Base.metadata

# Crear una migración
alembic revision --autogenerate -m "Add users table"

# Aplicar migraciones
alembic upgrade head

# Revertir migración
alembic downgrade -1`}
                    language="bash"
                    id="alembic-setup"
                  />
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* 7. Documentación y Pruebas */}
          <TabsContent value="documentacion">
            <Card className="glass border-white/20 card-hover">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-white">
                  <span>7. Documentación y Pruebas</span>
                  <Badge className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white border-0">
                    Testing y Docs
                  </Badge>
                </CardTitle>
                <CardDescription className="text-white/80">
                  Aprende a generar documentación automática y escribir pruebas para tu API
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="glass rounded-xl p-6">
                  <h3 className="text-xl font-semibold mb-3 text-white flex items-center gap-2">
                    <div className="h-5 w-5">📚</div>
                    Documentación Automática
                  </h3>
                  <p className="text-white/80 mb-4">
                    FastAPI genera automáticamente documentación interactiva:
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <Card className="glass border-white/10">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-sm text-white flex items-center gap-2">
                          <div className="h-4 w-4">📝</div>
                          Swagger UI
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="pt-0">
                        <p className="text-xs text-white/80 mb-2">
                          Documentación interactiva en <code className="glass px-1 rounded text-white">/docs</code>
                        </p>
                        <ul className="text-xs text-muted-foreground space-y-1">
                          <li>• Interfaz amigable</li>
                          <li>• Prueba endpoints directamente</li>
                          <li>• Soporte para autenticación</li>
                          <li>• Ejemplos de solicitud/respuesta</li>
                        </ul>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-sm">ReDoc</CardTitle>
                      </CardHeader>
                      <CardContent className="pt-0">
                        <p className="text-xs text-muted-foreground mb-2">
                          Documentación alternativa en <code>/redoc</code>
                        </p>
                        <ul className="text-xs text-muted-foreground space-y-1">
                          <li>• Diseño limpio y profesional</li>
                          <li>• Mejor para documentación larga</li>
                          <li>• Búsqueda integrada</li>
                          <li>• Exportación a PDF</li>
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                <Separator />

                <div>
                  <h3 className="text-xl font-semibold mb-3">Personalización de Documentación</h3>
                  <CodeBlock
                    code={`from fastapi import FastAPI
from fastapi.openapi.utils import get_openapi

app = FastAPI(
    title="Mi API FastAPI",
    description="Una API increíble construida con FastAPI",
    version="1.0.0",
    terms_of_service="https://example.com/terms/",
    contact={
        "name": "API Support",
        "url": "https://example.com/support",
        "email": "support@example.com",
    },
    license_info={
        "name": "MIT",
        "url": "https://opensource.org/licenses/MIT",
    },
    openapi_tags=[
        {
            "name": "users",
            "description": "Operaciones con usuarios",
            "externalDocs": {
                "description": "Documentación externa de usuarios",
                "url": "https://example.com/docs/users",
            },
        },
        {
            "name": "items",
            "description": "Operaciones con items",
        },
        {
            "name": "admin",
            "description": "Operaciones de administrador",
            "externalDocs": {
                "description": "Guía de administrador",
                "url": "https://example.com/docs/admin",
            },
        },
    ],
)

# Personalizar OpenAPI schema
def custom_openapi():
    if app.openapi_schema:
        return app.openapi_schema
    
    openapi_schema = get_openapi(
        title="Mi API Personalizada",
        version="1.0.0",
        description="Esta es una descripción personalizada",
        routes=app.routes,
    )
    
    # Añadir información adicional
    openapi_schema["info"]["x-logo"] = {
        "url": "https://fastapi.tiangolo.com/img/logo-margin/logo-teal.png"
    }
    
    # Personalizar componentes
    openapi_schema["components"]["securitySchemes"] = {
        "bearerAuth": {
            "type": "http",
            "scheme": "bearer",
            "bearerFormat": "JWT",
        }
    }
    
    # Añadir seguridad global
    openapi_schema["security"] = [{"bearerAuth": []}]
    
    app.openapi_schema = openapi_schema
    return app.openapi_schema

app.openapi = custom_openapi

# Ejemplo de endpoint con documentación personalizada
@app.post(
    "/users/",
    tags=["users"],
    summary="Crear un nuevo usuario",
    description="Crea un nuevo usuario en el sistema. El email debe ser único.",
    response_description="Usuario creado exitosamente",
    responses={
        201: {
            "description": "Usuario creado exitosamente",
            "content": {
                "application/json": {
                    "example": {
                        "id": 1,
                        "email": "user@example.com",
                        "username": "testuser",
                        "is_active": True
                    }
                }
            }
        },
        400: {
            "description": "Email ya existe",
            "content": {
                "application/json": {
                    "example": {
                        "detail": "El email ya está registrado"
                    }
                }
            }
        }
    }
)
async def create_user(user: UserCreate):
    # Lógica para crear usuario
    return user`}
                    language="python"
                    id="custom-docs"
                  />
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3">Pruebas con Pytest</h3>
                  <p className="text-muted-foreground mb-4">
                    Instala las dependencias para testing:
                  </p>
                  <CodeBlock
                    code="pip install pytest pytest-asyncio httpx"
                    language="bash"
                    id="install-pytest"
                  />
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium mb-2">Configuración de Pruebas</h4>
                      <CodeBlock
                        code={`# tests/conftest.py
import pytest
from fastapi.testclient import TestClient
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from sqlalchemy.pool import StaticPool

from app.main import app
from app.core.database import get_db
from app.models import Base

# Base de datos de prueba en memoria
SQLALCHEMY_DATABASE_URL = "sqlite://"

engine = create_engine(
    SQLALCHEMY_DATABASE_URL,
    connect_args={"check_same_thread": False},
    poolclass=StaticPool,
)
TestingSessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

@pytest.fixture(scope="function")
def db():
    Base.metadata.create_all(bind=engine)
    try:
        db = TestingSessionLocal()
        yield db
    finally:
        db.close()
        Base.metadata.drop_all(bind=engine)

@pytest.fixture(scope="function")
def client(db):
    def override_get_db():
        try:
            yield db
        finally:
            db.close()
    
    app.dependency_overrides[get_db] = override_get_db
    
    with TestClient(app) as c:
        yield c
    
    app.dependency_overrides.clear()`}
                        language="python"
                        id="pytest-config"
                      />
                    </div>

                    <div>
                      <h4 className="font-medium mb-2">Pruebas de API</h4>
                      <CodeBlock
                        code={`# tests/test_api.py
import pytest
from fastapi.testclient import TestClient

def test_read_root(client: TestClient):
    response = client.get("/")
    assert response.status_code == 200
    assert response.json() == {"message": "¡Hola, FastAPI!"}

def test_create_user(client: TestClient):
    user_data = {
        "email": "test@example.com",
        "username": "testuser",
        "password": "testpass123",
        "full_name": "Test User"
    }
    
    response = client.post("/users/", json=user_data)
    assert response.status_code == 201
    data = response.json()
    assert data["email"] == user_data["email"]
    assert data["username"] == user_data["username"]
    assert "id" in data
    assert data["is_active"] is True

def test_create_user_duplicate_email(client: TestClient):
    user_data = {
        "email": "duplicate@example.com",
        "username": "user1",
        "password": "pass123",
        "full_name": "User One"
    }
    
    # Crear primer usuario
    response = client.post("/users/", json=user_data)
    assert response.status_code == 201
    
    # Intentar crear usuario con mismo email
    response = client.post("/users/", json=user_data)
    assert response.status_code == 400
    assert "Email ya registrado" in response.json()["detail"]

def test_get_user(client: TestClient):
    # Crear usuario primero
    user_data = {
        "email": "get@example.com",
        "username": "getuser",
        "password": "pass123",
        "full_name": "Get User"
    }
    create_response = client.post("/users/", json=user_data)
    user_id = create_response.json()["id"]
    
    # Obtener usuario
    response = client.get(f"/users/{user_id}")
    assert response.status_code == 200
    data = response.json()
    assert data["id"] == user_id
    assert data["email"] == user_data["email"]

def test_get_nonexistent_user(client: TestClient):
    response = client.get("/users/999")
    assert response.status_code == 404
    assert response.json()["detail"] == "Usuario no encontrado"

def test_update_user(client: TestClient):
    # Crear usuario primero
    user_data = {
        "email": "update@example.com",
        "username": "updateuser",
        "password": "pass123",
        "full_name": "Update User"
    }
    create_response = client.post("/users/", json=user_data)
    user_id = create_response.json()["id"]
    
    # Actualizar usuario
    update_data = {
        "full_name": "Updated Name",
        "username": "updateduser"
    }
    response = client.put(f"/users/{user_id}", json=update_data)
    assert response.status_code == 200
    data = response.json()
    assert data["full_name"] == update_data["full_name"]
    assert data["username"] == update_data["username"]
    assert data["email"] == user_data["email"]  # No debe cambiar

def test_delete_user(client: TestClient):
    # Crear usuario primero
    user_data = {
        "email": "delete@example.com",
        "username": "deleteuser",
        "password": "pass123",
        "full_name": "Delete User"
    }
    create_response = client.post("/users/", json=user_data)
    user_id = create_response.json()["id"]
    
    # Eliminar usuario
    response = client.delete(f"/users/{user_id}")
    assert response.status_code == 200
    
    # Verificar que el usuario fue eliminado
    response = client.get(f"/users/{user_id}")
    assert response.status_code == 404`}
                        language="python"
                        id="api-tests"
                      />
                    </div>

                    <div>
                      <h4 className="font-medium mb-2">Pruebas con Autenticación</h4>
                      <CodeBlock
                        code={`# tests/test_auth.py
import pytest
from fastapi.testclient import TestClient

def test_login(client: TestClient):
    # Crear usuario primero
    user_data = {
        "email": "login@example.com",
        "username": "loginuser",
        "password": "pass123",
        "full_name": "Login User"
    }
    client.post("/users/", json=user_data)
    
    # Iniciar sesión
    login_data = {
        "username": "login@example.com",
        "password": "pass123"
    }
    response = client.post("/token", data=login_data)
    assert response.status_code == 200
    data = response.json()
    assert "access_token" in data
    assert data["token_type"] == "bearer"

def test_protected_route_without_token(client: TestClient):
    response = client.get("/users/me")
    assert response.status_code == 401

def test_protected_route_with_token(client: TestClient):
    # Crear usuario e iniciar sesión
    user_data = {
        "email": "protected@example.com",
        "username": "protecteduser",
        "password": "pass123",
        "full_name": "Protected User"
    }
    client.post("/users/", json=user_data)
    
    login_data = {
        "username": "protected@example.com",
        "password": "pass123"
    }
    login_response = client.post("/token", data=login_data)
    token = login_response.json()["access_token"]
    
    # Acceder a ruta protegida
    headers = {"Authorization": f"Bearer {token}"}
    response = client.get("/users/me", headers=headers)
    assert response.status_code == 200
    data = response.json()
    assert data["email"] == user_data["email"]

@pytest.fixture
def auth_headers(client: TestClient):
    # Crear usuario e iniciar sesión
    user_data = {
        "email": "auth@example.com",
        "username": "authuser",
        "password": "pass123",
        "full_name": "Auth User"
    }
    client.post("/users/", json=user_data)
    
    login_data = {
        "username": "auth@example.com",
        "password": "pass123"
    }
    login_response = client.post("/token", data=login_data)
    token = login_response.json()["access_token"]
    
    return {"Authorization": f"Bearer {token}"}

def test_create_item_with_auth(client: TestClient, auth_headers):
    item_data = {
        "title": "Test Item",
        "description": "A test item",
        "price": 99.99
    }
    
    response = client.post("/items/", json=item_data, headers=auth_headers)
    assert response.status_code == 201
    data = response.json()
    assert data["title"] == item_data["title"]
    assert data["price"] == item_data["price"]`}
                        language="python"
                        id="auth-tests"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3">Pruebas de Integración</h3>
                  <CodeBlock
                    code={`# tests/test_integration.py
import pytest
from fastapi.testclient import TestClient

def test_full_user_item_workflow(client: TestClient):
    """Prueba completa del flujo de usuario y items"""
    
    # 1. Crear usuario
    user_data = {
        "email": "workflow@example.com",
        "username": "workflowuser",
        "password": "pass123",
        "full_name": "Workflow User"
    }
    user_response = client.post("/users/", json=user_data)
    assert user_response.status_code == 201
    user_id = user_response.json()["id"]
    
    # 2. Iniciar sesión
    login_data = {
        "username": "workflow@example.com",
        "password": "pass123"
    }
    login_response = client.post("/token", data=login_data)
    assert login_response.status_code == 200
    token = login_response.json()["access_token"]
    headers = {"Authorization": f"Bearer {token}"}
    
    # 3. Crear varios items
    items_data = [
        {"title": "Item 1", "description": "First item", "price": 10.99},
        {"title": "Item 2", "description": "Second item", "price": 20.99},
        {"title": "Item 3", "description": "Third item", "price": 30.99}
    ]
    
    created_items = []
    for item_data in items_data:
        response = client.post("/items/", json=item_data, headers=headers)
        assert response.status_code == 201
        created_items.append(response.json())
    
    # 4. Obtener todos los items del usuario
    response = client.get("/items/", headers=headers)
    assert response.status_code == 200
    user_items = response.json()
    assert len(user_items) == 3
    
    # 5. Actualizar un item
    item_id = created_items[0]["id"]
    update_data = {"title": "Updated Item", "price": 15.99}
    response = client.put(f"/items/{item_id}", json=update_data, headers=headers)
    assert response.status_code == 200
    updated_item = response.json()
    assert updated_item["title"] == "Updated Item"
    assert updated_item["price"] == 15.99
    
    # 6. Buscar items
    response = client.get("/items/search/?query=item", headers=headers)
    assert response.status_code == 200
    search_results = response.json()
    assert len(search_results) >= 1
    
    # 7. Eliminar un item
    response = client.delete(f"/items/{item_id}", headers=headers)
    assert response.status_code == 200
    
    # 8. Verificar que el item fue eliminado
    response = client.get(f"/items/{item_id}", headers=headers)
    assert response.status_code == 404
    
    # 9. Verificar que los items restantes siguen ahí
    response = client.get("/items/", headers=headers)
    assert response.status_code == 200
    remaining_items = response.json()
    assert len(remaining_items) == 2

def test_error_handling(client: TestClient):
    """Prueba el manejo de errores en diferentes escenarios"""
    
    # Probar crear usuario con datos inválidos
    invalid_user = {
        "email": "invalid-email",
        "username": "",  # Username vacío
        "password": "123"  # Contraseña muy corta
    }
    response = client.post("/users/", json=invalid_user)
    assert response.status_code == 422
    
    # Probar acceder a usuario inexistente
    response = client.get("/users/999")
    assert response.status_code == 404
    
    # Probar crear item sin autenticación
    item_data = {"title": "Test Item", "price": 10.99}
    response = client.post("/items/", json=item_data)
    assert response.status_code == 401
    
    # Probar crear item con datos inválidos
    user_data = {
        "email": "error@example.com",
        "username": "erroruser",
        "password": "pass123",
        "full_name": "Error User"
    }
    client.post("/users/", json=user_data)
    
    login_data = {
        "username": "error@example.com",
        "password": "pass123"
    }
    login_response = client.post("/token", data=login_data)
    token = login_response.json()["access_token"]
    headers = {"Authorization": f"Bearer {token}"}
    
    invalid_item = {"title": "", "price": -10}  # Datos inválidos
    response = client.post("/items/", json=invalid_item, headers=headers)
    assert response.status_code == 422`}
                    language="python"
                    id="integration-tests"
                  />
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3">Ejecutar Pruebas</h3>
                  <CodeBlock
                    code={`# Ejecutar todas las pruebas
pytest

# Ejecutar pruebas con cobertura
pytest --cov=app --cov-report=html

# Ejecutar pruebas con verbosidad
pytest -v

# Ejecutar pruebas específicas
pytest tests/test_api.py::test_create_user

# Ejecutar pruebas con marcadores
pytest -m "not slow"

# Ver reporte de cobertura
open htmlcov/index.html

# Ejecutar pruebas en paralelo
pip install pytest-xdist
pytest -n auto

# Generar reporte de pruebas
pytest --html=report.html`}
                    language="bash"
                    id="run-tests"
                  />
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* 8. Despliegue */}
          <TabsContent value="despliegue">
            <Card className="glass border-white/20 card-hover">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-white">
                  <span>8. Despliegue</span>
                  <Badge className="bg-gradient-to-r from-red-500 to-orange-500 text-white border-0">
                    Producción
                  </Badge>
                </CardTitle>
                <CardDescription className="text-white/80">
                  Aprende a desplegar tu aplicación FastAPI en diferentes entornos
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="glass rounded-xl p-6">
                  <h3 className="text-xl font-semibold mb-3 text-white flex items-center gap-2">
                    <div className="h-5 w-5">🚀</div>
                    Preparación para Producción
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <Card className="glass border-white/10">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-sm text-white flex items-center gap-2">
                          <div className="h-4 w-4">⚙️</div>
                          Configuración de Producción</CardTitle>
                      </CardHeader>
                      <CardContent className="pt-0">
                        <ul className="text-xs text-muted-foreground space-y-1">
                          <li>• Desactivar modo debug</li>
                          <li>• Configurar variables de entorno</li>
                          <li>• Usar servidor de producción</li>
                          <li>• Configurar HTTPS</li>
                          <li>• Establecer logging adecuado</li>
                        </ul>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-sm">Buenas Prácticas</CardTitle>
                      </CardHeader>
                      <CardContent className="pt-0">
                        <ul className="text-xs text-muted-foreground space-y-1">
                          <li>• Usar .env para variables</li>
                          <li>• Implementar CORS</li>
                          <li>• Configurar rate limiting</li>
                          <li>• Usar reverse proxy</li>
                          <li>• Monitorear la aplicación</li>
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                <Separator />

                <div>
                  <h3 className="text-xl font-semibold mb-3">Configuración de Producción</h3>
                  <CodeBlock
                    code={`# app/core/config.py
from pydantic import BaseSettings, Field
from typing import Optional

class Settings(BaseSettings):
    # Configuración básica
    PROJECT_NAME: str = "Mi API FastAPI"
    VERSION: str = "1.0.0"
    DEBUG: bool = Field(False, env="DEBUG")
    
    # API
    API_V1_STR: str = "/api/v1"
    
    # Base de datos
    DATABASE_URL: str = Field(..., env="DATABASE_URL")
    
    # Seguridad
    SECRET_KEY: str = Field(..., env="SECRET_KEY")
    ACCESS_TOKEN_EXPIRE_MINUTES: int = Field(30, env="ACCESS_TOKEN_EXPIRE_MINUTES")
    ALGORITHM: str = "HS256"
    
    # CORS
    BACKEND_CORS_ORIGINS: list[str] = Field(
        ["http://localhost:3000", "http://localhost:8000"],
        env="BACKEND_CORS_ORIGINS"
    )
    
    # Logging
    LOG_LEVEL: str = Field("INFO", env="LOG_LEVEL")
    
    # Servidor
    HOST: str = Field("0.0.0.0", env="HOST")
    PORT: int = Field(8000, env="PORT")
    
    class Config:
        env_file = ".env"
        case_sensitive = True

settings = Settings()

# app/main.py
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.middleware.trustedhost import TrustedHostMiddleware
from fastapi.middleware.gzip import GZipMiddleware
import logging
from app.core.config import settings

# Configurar logging
logging.basicConfig(
    level=getattr(logging, settings.LOG_LEVEL),
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)

app = FastAPI(
    title=settings.PROJECT_NAME,
    version=settings.VERSION,
    debug=settings.DEBUG,
    openapi_url=f"{settings.API_V1_STR}/openapi.json"
    if not settings.DEBUG else None,
)

# Middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.BACKEND_CORS_ORIGINS,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.add_middleware(
    TrustedHostMiddleware,
    allowed_hosts=["*"]  # Configurar según tu dominio
)

app.add_middleware(GZipMiddleware, minimum_size=1000)

@app.get("/health")
async def health_check():
    return {"status": "healthy", "version": settings.VERSION}`}
                    language="python"
                    id="production-config"
                  />
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3">Despliegue con Docker</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium mb-2">Dockerfile</h4>
                      <CodeBlock
                        code={`# Dockerfile
FROM python:3.11-slim

# Establecer el directorio de trabajo
WORKDIR /app

# Instalar dependencias del sistema
RUN apt-get update && apt-get install -y \\
    build-essential \\
    && rm -rf /var/lib/apt/lists/*

# Copiar requirements y instalar dependencias de Python
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copiar código de la aplicación
COPY . .

# Crear usuario no root
RUN useradd -m -u 1000 appuser && chown -R appuser:appuser /app
USER appuser

# Exponer puerto
EXPOSE 8000

# Comando para ejecutar la aplicación
CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "8000"]`}
                        language="docker"
                        id="dockerfile"
                      />
                    </div>

                    <div>
                      <h4 className="font-medium mb-2">docker-compose.yml</h4>
                      <CodeBlock
                        code={`version: '3.8'

services:
  app:
    build: .
    ports:
      - "8000:8000"
    environment:
      - DATABASE_URL=postgresql://user:password@db:5432/mydb
      - SECRET_KEY=your-secret-key-here
      - DEBUG=False
    depends_on:
      - db
      - redis
    volumes:
      - ./app:/app
    restart: unless-stopped

  db:
    image: postgres:15
    environment:
      - POSTGRES_DB=mydb
      - POSTGRES_USER=user
      - POSTGRES_PASSWORD=password
    volumes:
      - postgres_data:/var/lib/postgresql/data
    ports:
      - "5432:5432"
    restart: unless-stopped

  redis:
    image: redis:7-alpine
    ports:
      - "6379:6379"
    restart: unless-stopped

  nginx:
    image: nginx:alpine
    ports:
      - "80:80"
      - "443:443"
    volumes:
      - ./nginx.conf:/etc/nginx/nginx.conf
      - ./ssl:/etc/nginx/ssl
    depends_on:
      - app
    restart: unless-stopped

volumes:
  postgres_data:`}
                        language="yaml"
                        id="docker-compose"
                      />
                    </div>

                    <div>
                      <h4 className="font-medium mb-2">nginx.conf</h4>
                      <CodeBlock
                        code={`events {
    worker_connections 1024;
}

http {
    upstream app {
        server app:8000;
    }

    # HTTP redirect to HTTPS
    server {
        listen 80;
        server_name yourdomain.com www.yourdomain.com;
        return 301 https://$server_name$request_uri;
    }

    # HTTPS server
    server {
        listen 443 ssl http2;
        server_name yourdomain.com www.yourdomain.com;

        # SSL configuration
        ssl_certificate /etc/nginx/ssl/cert.pem;
        ssl_certificate_key /etc/nginx/ssl/key.pem;
        ssl_protocols TLSv1.2 TLSv1.3;
        ssl_ciphers HIGH:!aNULL:!MD5;

        # Security headers
        add_header X-Frame-Options DENY;
        add_header X-Content-Type-Options nosniff;
        add_header X-XSS-Protection "1; mode=block";
        add_header Strict-Transport-Security "max-age=31536000; includeSubDomains" always;

        # Rate limiting
        limit_req_zone $binary_remote_addr zone=api:10m rate=10r/s;
        limit_req zone=api burst=20 nodelay;

        # Proxy to FastAPI app
        location / {
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

        # Static files (if any)
        location /static/ {
            alias /app/static/;
            expires 1y;
            add_header Cache-Control "public, immutable";
        }

        # Health check
        location /health {
            access_log off;
            proxy_pass http://app/health;
        }
    }
}`}
                        language="nginx"
                        id="nginx-config"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3">Plataformas de Despliegue</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-sm">Render</CardTitle>
                      </CardHeader>
                      <CardContent className="pt-0">
                        <p className="text-xs text-muted-foreground mb-2">
                          Plataforma cloud fácil de usar
                        </p>
                        <CodeBlock
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
    databaseName: mydb
    user: fastapi`}
                            language="yaml"
                            id="render-config"
                        />
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-sm">Railway</CardTitle>
                      </CardHeader>
                      <CardContent className="pt-0">
                        <p className="text-xs text-muted-foreground mb-2">
                          Despliegue simple con Git
                        </p>
                        <CodeBlock
                            code={`# railway.toml
[build]
command = "pip install -r requirements.txt"

[deploy]
startCommand = "uvicorn app.main:app --host 0.0.0.0 --port $PORT"

[env]
PORT = "8000"
DEBUG = "false"

[[services]]
name = "web"
internal_port = 8000
protocol = "TCP"`}
                            language="toml"
                            id="railway-config"
                        />
                      </CardContent>
                    </Card>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3">Despliegue en Servidor VPS</h3>
                  <CodeBlock
                    code={`# Instalar dependencias
sudo apt update
sudo apt install -y python3-pip python3-venv nginx

# Crear usuario y directorio
sudo useradd -m -s /bin/bash fastapi
sudo su - fastapi

# Clonar repositorio
git clone https://github.com/yourusername/yourproject.git
cd yourproject

# Crear entorno virtual
python3 -m venv venv
source venv/bin/activate

# Instalar dependencias
pip install -r requirements.txt

# Configurar variables de entorno
cp .env.example .env
nano .env

# Probar aplicación
uvicorn app.main:app --host 0.0.0.0 --port 8000

# Configurar systemd service
sudo nano /etc/systemd/system/fastapi.service
[Unit]
Description=FastAPI Application
After=network.target

[Service]
User=fastapi
Group=fastapi
WorkingDirectory=/home/fastapi/yourproject
Environment=PATH=/home/fastapi/yourproject/venv/bin
ExecStart=/home/fastapi/yourproject/venv/bin/uvicorn app.main:app --host 0.0.0.0 --port 8000
Restart=always

[Install]
WantedBy=multi-user.target

# Iniciar servicio
sudo systemctl daemon-reload
sudo systemctl enable fastapi
sudo systemctl start fastapi
sudo systemctl status fastapi

# Configurar Nginx
sudo nano /etc/nginx/sites-available/fastapi
server {
    listen 80;
    server_name yourdomain.com;

    location / {
        proxy_pass http://127.0.0.1:8000;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}

# Habilitar sitio
sudo ln -s /etc/nginx/sites-available/fastapi /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx

# Configurar SSL con Certbot
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d yourdomain.com`}
                    language="bash"
                    id="vps-deployment"
                  />
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3">Monitoreo y Logging</h3>
                  <CodeBlock
                    code={`# app/core/logging.py
import logging
import sys
from pathlib import Path
from logging.handlers import RotatingFileHandler

def setup_logging():
    # Crear directorio de logs
    log_dir = Path("logs")
    log_dir.mkdir(exist_ok=True)
    
    # Configurar formato
    formatter = logging.Formatter(
        '%(asctime)s - %(name)s - %(levelname)s - %(message)s'
    )
    
    # Logger principal
    logger = logging.getLogger()
    logger.setLevel(logging.INFO)
    
    # Handler para consola
    console_handler = logging.StreamHandler(sys.stdout)
    console_handler.setFormatter(formatter)
    logger.addHandler(console_handler)
    
    # Handler para archivo (con rotación)
    file_handler = RotatingFileHandler(
        "logs/app.log",
        maxBytes=10*1024*1024,  # 10MB
        backupCount=5
    )
    file_handler.setFormatter(formatter)
    logger.addHandler(file_handler)
    
    # Handler para errores
    error_handler = RotatingFileHandler(
        "logs/error.log",
        maxBytes=10*1024*1024,
        backupCount=5
    )
    error_handler.setLevel(logging.ERROR)
    error_handler.setFormatter(formatter)
    logger.addHandler(error_handler)

# app/main.py
from fastapi import FastAPI, Request
from fastapi.responses import JSONResponse
import time
from app.core.logging import setup_logging

setup_logging()

app = FastAPI()

@app.middleware("http")
async def log_requests(request: Request, call_next):
    start_time = time.time()
    
    # Log de solicitud
    logger = logging.getLogger("fastapi")
    logger.info(f"Incoming request: {request.method} {request.url}")
    
    response = await call_next(request)
    
    # Log de respuesta
    process_time = time.time() - start_time
    logger.info(
        f"Completed {request.method} {request.url} "
        f"with status {response.status_code} in {process_time:.3f}s"
    )
    
    return response

@app.exception_handler(Exception)
async def global_exception_handler(request: Request, exc: Exception):
    logger = logging.getLogger("fastapi")
    logger.error(f"Unhandled exception: {exc}", exc_info=True)
    
    return JSONResponse(
        status_code=500,
        content={"detail": "Internal server error"}
    )

# health check con métricas
@app.get("/health")
async def health_check():
    return {
        "status": "healthy",
        "timestamp": time.time(),
        "version": "1.0.0"
    }`}
                    language="python"
                    id="monitoring-logging"
                  />
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3">CI/CD con GitHub Actions</h3>
                  <CodeBlock
                    code={`name: Deploy FastAPI

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  test:
    runs-on: ubuntu-latest
    
    services:
      postgres:
        image: postgres:15
        env:
          POSTGRES_PASSWORD: postgres
        options: >-
          --health-cmd pg_isready
          --health-interval 10s
          --health-timeout 5s
          --health-retries 5
        ports:
          - 5432:5432
    
    steps:
    - uses: actions/checkout@v3
    
    - name: Set up Python
      uses: actions/setup-python@v4
      with:
        python-version: '3.11'
    
    - name: Install dependencies
      run: |
        python -m pip install --upgrade pip
        pip install -r requirements.txt
    
    - name: Run tests
      run: |
        pytest --cov=app --cov-report=xml
      env:
        DATABASE_URL: postgresql://postgres:postgres@localhost:5432/postgres
        SECRET_KEY: test-secret-key
    
    - name: Upload coverage to Codecov
      uses: codecov/codecov-action@v3

  deploy:
    needs: test
    runs-on: ubuntu-latest
    if: github.ref == 'refs/heads/main'
    
    steps:
    - uses: actions/checkout@v3
    
    - name: Deploy to Render
      run: |
        curl -X POST \\
          -H "Authorization: Bearer ${'${'}{ secrets.RENDER_API_KEY }}" \\
          -H "Content-Type: application/json" \\
          -d '{"serviceId": "${'${'}{ secrets.RENDER_SERVICE_ID }}"}' \\
          https://api.render.com/v1/services/${'${'}{ secrets.RENDER_SERVICE_ID }}/deploys
    
    - name: Deploy to Railway
      run: |
        npm install -g @railway/cli
        railway login --token ${'${'}{ secrets.RAILWAY_TOKEN }}
        railway up`}
                    language="yaml"
                    id="github-actions"
                  />
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3">Checklist de Producción</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-sm">Antes del Despliegue</CardTitle>
                      </CardHeader>
                      <CardContent className="pt-0">
                        <ul className="text-xs text-muted-foreground space-y-1">
                          <li>□ Desactivar modo debug</li>
                          <li>□ Configurar variables de entorno</li>
                          <li>□ Actualizar dependencias</li>
                          <li>□ Ejecutar todas las pruebas</li>
                          <li>□ Revisar seguridad de la API</li>
                          <li>□ Configurar CORS correctamente</li>
                          <li>□ Implementar rate limiting</li>
                          <li>□ Configurar logging adecuado</li>
                        </ul>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-sm">Después del Despliegue</CardTitle>
                      </CardHeader>
                      <CardContent className="pt-0">
                        <ul className="text-xs text-muted-foreground space-y-1">
                          <li>□ Verificar health check</li>
                          <li>□ Probar todos los endpoints</li>
                          <li>□ Configurar monitoreo</li>
                          <li>□ Establecer alertas</li>
                          <li>□ Configurar backups</li>
                          <li>□ Revisar logs de errores</li>
                          <li>□ Probar rendimiento</li>
                          <li>□ Verificar SSL/TLS</li>
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>

      {/* Footer */}
      <footer className="glass border-t border-white/20 backdrop-blur-lg">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-left">
              <p className="text-sm text-white/90 flex items-center justify-center md:justify-start gap-2">
                © 2025 Guía FastAPI. Desarrollado con 
                <span className="text-red-400 animate-pulse">❤️</span> 
                para estudiantes
              </p>
            </div>
            <div className="flex gap-4">
              <Button className="glass hover:bg-white/20 text-white border-white/30 btn-glow">
                <Github className="h-4 w-4 mr-2" />
                GitHub
              </Button>
              <Button className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white border-0 btn-glow">
                <ExternalLink className="h-4 w-4 mr-2" />
                Documentación Oficial
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}