import { useState } from "react";
import {
  Modal,
  TextInput,
  NumberInput,
  Select,
  Button,
  Stack,
} from "@mantine/core";

type AddExpenseModalProps = {
  opened: boolean;
  onClose: () => void;
  onAdd: (name: string, amount: number | string, category: string) => void;
};

export default function AddExpenseModal({
  opened,
  onClose,
}: AddExpenseModalProps) {
  const [name, setName] = useState<string>("");
  const [amount, setAmount] = useState<string | number>(0);
  const [category, setCategory] = useState<string | null>(null);

  const inputNameOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value)
  }
  const inputAmountOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(event.target.value)
  } 
  const inputCategoryOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCategory(event.target.value)
  }
  const handleSubmit = () => {
    
  };

  

  // หากต้องการแปง type string เป็น type number สามารถดูตัวอย่างนี้ได้
  let val_number: number = Number("500.0");
  console.log(val_number + 100); // 600.0

  return (
    /* Type additional text here. */
    <Modal opened={opened} onClose={onClose} title="Add Expense">
      <Stack>
        <TextInput
          label="Expense name"
          withAsterisk
          description="Expense name"
          error="Expense name is required"
          placeholder="E.g., Coca-Cola"
        />
        <NumberInput
          label="Amount"
          description="Amount"
          error="Amount is required"
          placeholder="0"
        />
        <Select
          label="Category"
          data={["Food", "Transport", "Entertainment"]}
          description="Category"
          error="Category is required"
          placeholder="Select Category"
        />
        <Button fullWidth>Submit</Button>
      </Stack>
    </Modal>
  );
}
