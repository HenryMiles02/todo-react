import Bagde from "../components/bagde";
import Button from "../components/button";
import ButtonIcon from "../components/button-icon";
import Card from "../components/card";
import Container from "../components/container";
import Icon from "../components/icon";
import InputCheckbox from "../components/input-checkbox";
import InputText from "../components/input-text";
import Skeleton from "../components/skeleton";
import Text from "../components/text";
import TrashIcon from "../assets/icons/trash.svg?react"
import PlusIcon from "../assets/icons/plus.svg?react"
import PencilIcon from "../assets/icons/pencil.svg?react"


export default function PageComponents () {
return (
    <Container className="flex flex-col gap-10 p-20">
      <Text variant="body-md">Olá mundo!</Text>
      <Text variant="body-md-bold">Olá mundo!</Text>
      <Text variant="body-sm-bold">Olá mundo!</Text>
      <Text variant="body-sm-bold" className="text-red-700">Olá mundo!</Text>

    <div className="flex gap-2">
      <Icon svg={TrashIcon} className="fill-green-base" />
    </div>

    <div className="flex gap-1">
      <Bagde variant="secondary">5</Bagde>
      <Bagde variant="primary">2 de 5</Bagde>
      <Bagde loading>5</Bagde>
    </div>

    <div>
      <Button icon={PlusIcon}>Nova tarefa</Button>
      <Button icon={PlusIcon} handling >Criando...</Button>
    </div>

    <div>
      <ButtonIcon icon={TrashIcon} />
      <ButtonIcon icon={TrashIcon} variant="secondary" />
      <ButtonIcon icon={TrashIcon} variant="tertiary" />
      <ButtonIcon icon={TrashIcon} variant="secondary" loading />
    </div>

    <div>
      <InputText />
    </div>

    <div>
      <InputCheckbox />

      <InputCheckbox loading />
    </div>
    <Card size="md"  className="flex flex-row items-center gap-3">
      <InputCheckbox />
      <Text as="p" variant="body-md" className="flex-1">Fazer compras da semana</Text>
      <ButtonIcon icon={TrashIcon} variant="tertiary" />
      <ButtonIcon icon={PencilIcon} variant="tertiary" />
    </Card>

    <div className="space-y-2">
      <Skeleton />
      <Skeleton />
      <Skeleton className="w-96 h-6" />
    </div>
      
    </Container>
  )
}