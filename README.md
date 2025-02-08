# React + TypeScript + Vite

# 🚑 Medic_app

¡Bienvenido a **Medic_app**! Un aplicativo diseñado para la gestión de turnos en un consultorio con uno o más médicos. 🏥📅

Esta APP facilita la reserva de turnos mediante la implementación de un frontend, permitiendo a los pacientes registrarse, iniciar sesión, ver los turnos disponibles y reservar uno.

---

## 📜 Descripción General

🛠️ **Tecnologías utilizadas en este Frotend:**

- **React.js** con **Typescript** y **Tailwind** 🚀
- **react-router-dom** para el manejo de rutas ➡️
- **react-hook-form** para manejo eficiente de formularios 📃
- **axios** para consumo de API 📩📤
- **zustand** para manejo de estado general/global 🧑‍🚀

📂 **Estructura del proyecto:**

```

src/
│
├── 📂 api/                  # Lógica relacionada con la API (axios, endpoints, etc.)
│   └── auth.ts           # Endpoints de autenticación
│   └── appointments.ts   # Endpoints de turnos
│   └── index.ts          # Exportación de todos los servicios de API
│
├── 📂 assets/               # Archivos estáticos (imágenes, fuentes, etc.)
│   └── images/
│   └── styles/
│
├── 📂 components/           # Componentes reutilizables
│   ├── common/           # Componentes comunes (botones, inputs, etc.)
│   ├── layout/           # Componentes de diseño (header, footer, sidebar)
│   └── ui/               # Componentes de UI específicos (modales, cards, etc.)
│
├── 📂 hooks/                # Custom hooks
│   └── useAuth.ts        # Hook para manejar la autenticación
│   └── useAppointments.ts # Hook para manejar los turnos
│
├── 📂 pages/                # Páginas de la aplicación
│   ├── Login.tsx         # Página de login
│   ├── Register.tsx      # Página de registro
│   ├── Dashboard.tsx     # Página principal del dashboard
│   └── Profile.tsx       # Página de perfil de usuario
│
├── 📂 store/                # Estado global (Zustand)
│   └── authStore.ts      # Store para la autenticación
│   └── appointmentStore.ts # Store para los turnos
│
├── 📂 types/                # Tipos de TypeScript
│   └── user.ts           # Tipos relacionados con el usuario
│   └── appointment.ts    # Tipos relacionados con los turnos
│
├── 📂 utils/                # Utilidades y helpers
│   └── authHelpers.ts    # Funciones de ayuda para la autenticación
│   └── dateHelpers.ts    # Funciones de ayuda para manejo de fechas
│
├── App.tsx               # Componente principal de la aplicación
├── main.tsx              # Punto de entrada de la aplicación
└── 📂routes/               # Configuración de rutas (React Router)
    └── AppRouter.tsx

```

Esta arquitectura asegura una **separación de responsabilidades** clara y eficiente. ✅

---

## Flujo de la Aplicación:

El usuario ingresa a la aplicación (/).

App.tsx renderiza AppRouter.

AppRouter detecta que la ruta es / y renderiza Home.tsx.

Home.tsx verifica si el usuario está autenticado:

Si está autenticado, lo redirige al dashboard.

Si no está autenticado, muestra un mensaje de bienvenida.
