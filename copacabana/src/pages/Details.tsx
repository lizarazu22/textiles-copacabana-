import { AppLayout } from "../layouts/AppLayout"

interface Props {
    file: File | null;
  }

export const Details = ({ file }: Props) => {
    return (
        <AppLayout>
            <h1>Seccion de detalles</h1>
        </AppLayout>
    )
}