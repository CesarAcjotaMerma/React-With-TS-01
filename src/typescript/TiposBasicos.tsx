
export const TiposBasicos = () => {

    const nombre: string = 'Cesar';
    const edad: number = 35;
    const estaActivo: boolean = false;

    const poderes:string[] = [];

    return (
        <>
            <h3>Tipos Basicos</h3>
            { nombre } - { edad } - { estaActivo ? 'activo': 'inactivo' }

            <br />
            { poderes.join(', ') }
        </>
    )
}
