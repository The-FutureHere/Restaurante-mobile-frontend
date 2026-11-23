import type{Categoria,Chamado,CriarPedido,Pedido,Produto,Restaurante}from'../types';
const BASE=import.meta.env.VITE_API_URL||'https://restaurante-backend-vow0.onrender.com/api';
async function request<T>(path:string,init?:RequestInit):Promise<T>{const r=await fetch(`${BASE}${path}`,{...init,headers:{'Content-Type':'application/json',...init?.headers}});const body=await r.json().catch(()=>null);if(!r.ok)throw new Error(body?.message||body?.error||`Não foi possível concluir a solicitação (${r.status})`);return body as T}
export const api={
 restaurante:(slug:string)=>request<Restaurante>(`/public/${encodeURIComponent(slug)}`),
 categorias:(slug:string)=>request<Categoria[]>(`/public/${encodeURIComponent(slug)}/categorias`),
 produtos:(slug:string)=>request<Produto[]>(`/public/${encodeURIComponent(slug)}/produtos`),
 pedidosMesa:(slug:string,mesa:number)=>request<Pedido[]>(`/public/${encodeURIComponent(slug)}/mesas/${mesa}/pedidos`),
 criarPedido:(slug:string,p:CriarPedido)=>request<Pedido>(`/public/${encodeURIComponent(slug)}/pedidos`,{method:'POST',body:JSON.stringify(p)}),
 criarChamado:(slug:string,numero_mesa:number,tipo:Chamado['tipo'])=>request<Chamado>(`/public/${encodeURIComponent(slug)}/chamados`,{method:'POST',body:JSON.stringify({numero_mesa,tipo})}),
 statusMesa:(slug:string,mesa:number)=>request<{numero_mesa:number;status:'ABERTA'|'FECHAMENTO_SOLICITADO'|'FECHADA'}>(`/public/${encodeURIComponent(slug)}/mesas/${mesa}/status`)
};
