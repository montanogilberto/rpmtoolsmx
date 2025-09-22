# Logo Responsivo - RPM Tools

## 📱 Versiones Responsivas del Logo

Hemos creado un sistema completo de logos responsivos para tu sitio web industrial.

### 🎯 **Tamaños Disponibles:**

| Tamaño | Altura | Ancho | Uso Recomendado |
|--------|--------|-------|-----------------|
| **xs** | 40px | auto | Footer, móvil pequeño |
| **small** | 48px | 120px | Header móvil |
| **medium** | 60px | 180px | Header tablet |
| **large** | 80px | 240px | Header desktop |

### 🎨 **Anchos Disponibles:**

| Ancho | Valor | Descripción |
|-------|-------|-------------|
| **auto** | auto | Ancho automático |
| **sm** | 120px | Pequeño |
| **md** | 180px | Mediano |
| **lg** | 240px | Grande |
| **xl** | 300px | Extra grande |

## 🚀 **Cómo Usar:**

### **1. Componente Logo (Recomendado):**
```tsx
import Logo from './components/Logo';

// Header desktop
<Logo size="large" width="lg" showEffect={true} />

// Footer
<Logo size="xs" width="auto" />

// Mobile
<Logo size="small" width="sm" />
```

### **2. CSS Classes Directas:**
```tsx
// En tu JSX
<img
  src={Logotipo}
  alt="RPM Tools Logo"
  className="logo-image metallic logo-large logo-width-lg object-contain"
/>
```

### **3. Responsive con Media Queries:**
```css
/* Ya implementado en industrial.css */
@media (max-width: 1024px) {
  .logo-image { height: 60px; }
}

@media (max-width: 768px) {
  .logo-image { height: 48px; }
}
```

## 📂 **Archivos Creados:**

- ✅ `src/components/Logo.tsx` - Componente reutilizable
- ✅ `src/components/LogoExamples.tsx` - Ejemplos de uso
- ✅ `src/styles/industrial.css` - Clases CSS responsivas
- ✅ `src/components/Header.tsx` - Header actualizado

## 🎯 **Características:**

- ✅ **Responsive**: Se adapta automáticamente a diferentes pantallas
- ✅ **Efectos visuales**: Shine metálico opcional
- ✅ **Optimización**: Transiciones suaves entre tamaños
- ✅ **Flexibilidad**: Múltiples opciones de tamaño y ancho
- ✅ **Consistencia**: Mismo estilo en toda la aplicación

## 📱 **Breakpoints:**

- **Desktop**: > 1024px (logo-large: 80px)
- **Tablet**: 768px - 1024px (logo-medium: 60px)
- **Mobile**: 480px - 768px (logo-small: 48px)
- **Small Mobile**: < 480px (logo-xs: 40px)

## 🎨 **Efectos Disponibles:**

- `metallic`: Efecto shine metálico animado
- `hover-lift`: Efecto hover con elevación
- `logo-container`: Contenedor con efecto de brillo

## 📊 **Recomendaciones de Uso:**

1. **Header principal**: `size="large"` con efecto metálico
2. **Footer**: `size="xs"` sin efectos
3. **Menú móvil**: `size="small"` compacto
4. **Secciones internas**: `size="medium"` balanceado

¡Tu logo ahora es completamente responsivo y se verá perfecto en todos los dispositivos! 🎉
