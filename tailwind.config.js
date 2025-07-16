module.exports = {
  content: ["./pages/*.{html,js}", "./index.html", "./js/*.js"],
  theme: {
    extend: {
      colors: {
        // Primary Colors
        primary: {
          DEFAULT: "#FFFFFF", // white
          50: "#FAFAFA", // gray-50
          100: "#F5F5F5", // gray-100
        },
        
        // Secondary Colors
        secondary: {
          DEFAULT: "#F8F9FA", // gray-50
          100: "#F1F3F4", // gray-100
          200: "#E8EAED", // gray-200
        },
        
        // Accent Colors
        accent: {
          DEFAULT: "#FEC400", // yellow-400
          50: "#FFFBEB", // yellow-50
          100: "#FEF3C7", // yellow-100
          500: "#F59E0B", // yellow-500
        },
        
        // Background Colors
        background: "#FFFFFF", // white
        surface: {
          DEFAULT: "#F1F3F4", // gray-100
          hover: "#E8EAED", // gray-200
        },
        
        // Text Colors
        text: {
          primary: "#1A1A1A", // gray-900
          secondary: "#6B7280", // gray-500
          muted: "#9CA3AF", // gray-400
        },
        
        // Status Colors
        success: {
          DEFAULT: "#2ECC71", // green-500
          50: "#ECFDF5", // green-50
          100: "#D1FAE5", // green-100
        },
        
        warning: {
          DEFAULT: "#F59E0B", // yellow-500
          50: "#FFFBEB", // yellow-50
          100: "#FEF3C7", // yellow-100
        },
        
        error: {
          DEFAULT: "#E74C3C", // red-500
          50: "#FEF2F2", // red-50
          100: "#FEE2E2", // red-100
        },
        
        // Border Colors
        border: {
          DEFAULT: "#E5E7EB", // gray-200
          light: "#F3F4F6", // gray-100
        },
      },
      
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        'ibm-plex': ['IBM Plex Sans', 'sans-serif'],
        'ibm-mono': ['IBM Plex Mono', 'monospace'],
        sans: ['IBM Plex Sans', 'sans-serif'],
        mono: ['IBM Plex Mono', 'monospace'],
      },
      
      fontSize: {
        'hero': ['3.5rem', { lineHeight: '1.1', fontWeight: '700' }],
        'display': ['2.5rem', { lineHeight: '1.2', fontWeight: '600' }],
        'heading': ['2rem', { lineHeight: '1.3', fontWeight: '600' }],
        'subheading': ['1.5rem', { lineHeight: '1.4', fontWeight: '600' }],
        'body-lg': ['1.125rem', { lineHeight: '1.6', fontWeight: '400' }],
        'body': ['1rem', { lineHeight: '1.6', fontWeight: '400' }],
        'body-sm': ['0.875rem', { lineHeight: '1.5', fontWeight: '400' }],
        'caption': ['0.75rem', { lineHeight: '1.4', fontWeight: '400' }],
      },
      
      boxShadow: {
        'subtle': '0px 4px 10px rgba(0, 0, 0, 0.06)',
        'card': '0px 2px 8px rgba(0, 0, 0, 0.04)',
        'enterprise': '0px 4px 10px rgba(0, 0, 0, 0.06)',
      },
      
      borderRadius: {
        'lg': '0.5rem',
        'xl': '0.75rem',
        '2xl': '1rem',
      },
      
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      
      transitionDuration: {
        '300': '300ms',
        '400': '400ms',
      },
      
      transitionTimingFunction: {
        'smooth': 'ease-in-out',
      },
      
      animation: {
        'fade-in': 'fadeIn 400ms ease-in-out',
        'slide-up': 'slideUp 400ms ease-in-out',
        'scale-in': 'scaleIn 300ms ease-in-out',
      },
      
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}