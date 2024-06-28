import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // 빌드된 파일이 생성될 디렉토리
  },
  publicDir: 'public', // 정적 파일이 포함될 디렉토리
})
