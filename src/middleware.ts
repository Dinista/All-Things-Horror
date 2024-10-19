import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Define rotas públicas que não exigem autenticação
const PUBLIC_FILE = /\.(.*)$/;

export function middleware(req: NextRequest) {
  const url = req.nextUrl.clone();

  // Defina uma lista de caminhos públicos que não precisam de autenticação
  const publicPaths = ['/login', '/register', '/api/public'];

  // Verifica se a solicitação é para um arquivo público
  if (PUBLIC_FILE.test(req.nextUrl.pathname)) {
    return NextResponse.next();
  }

  // Verifica se a rota é pública
  if (publicPaths.includes(req.nextUrl.pathname)) {
    return NextResponse.next();
  }

  // Verifica autenticação (exemplo com token de sessão)
  const token = req.cookies.get('token');
  
  // Se o token não existe e o usuário não está em uma rota pública, redireciona para a página de login
  if (!token) {
    
    return NextResponse.next();
  }

  // Caso o token exista, permite continuar
  return NextResponse.next();
}

// Configuração opcional para aplicar o middleware em todas as rotas ou caminhos específicos
export const config = {
  matcher: [
    /*
     * Matcher pode ser usado para definir em quais rotas o middleware deve ser aplicado.
     * Exemplo: Aplicar middleware em todas as rotas, exceto as públicas e estáticas.
     */
    '/((?!_next/static|_next/image|favicon.ico).*)',
  ],
};
