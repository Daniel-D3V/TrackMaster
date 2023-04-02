import { rastrearEncomendas } from 'correios-brasil';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    try {
        const { trackingNumber } = await request.json();

        if (!trackingNumber) return NextResponse.json({ message: 'Missing route parameters' }, { status: 400 })

        const response = await rastrearEncomendas([trackingNumber])

        if (response[0] && response[0].mensagem && response[0].mensagem.includes('Objeto inválido')) return NextResponse.json({ message: 'Object not found' }, { status: 404 })

        const result_data = {} as any;
        result_data.events = [];
        result_data.type = {};
        result_data.code = trackingNumber

        result_data.type.category = response[0].tipoPostal.categoria;
        result_data.type.description = response[0].tipoPostal.descricao;
        result_data.type.sigla = response[0].tipoPostal.sigla;

        response[0].eventos.forEach((event: any) => {
            result_data.events.push({
                code: event.codigo,
                description: event.descricao,
                createdAt: event.dtHrCriado,
                type: event.tipo,
                location: event.unidade.tipo === "País" ? event.unidade.nome : `${event.unidade.endereco.cidade} - ${event.unidade.endereco.uf}`
            });
        })

        return NextResponse.json(result_data)
    } catch (error) {
        return NextResponse.json({ message: 'You must use application/json in the request header!' }, { status: 500 })
    }
}