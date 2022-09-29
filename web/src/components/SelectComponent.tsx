import * as Select from '@radix-ui/react-select'

import { CaretDown } from 'phosphor-react'

interface SelectProps {
  text: string;
  mdMaxWidth: string;
}

export function SelectComponent({ text, mdMaxWidth }: SelectProps) {
  return (
    <div className={`max-w-[80%] w-full px-4 ${mdMaxWidth}`}>
      <label className="inline-block mb-2">{text}</label>
      <Select.Root>
        <Select.Trigger
          className={`w-full h-10 py-[0.375rem] pr-7 pl-3 mb-4 bg-white flex justify-between items-center text-base text-zinc-700 rounded`}
        >
          <Select.Value placeholder="Selecione..." />
          <Select.Icon>
            <CaretDown />
          </Select.Icon>
        </Select.Trigger>

        <Select.Portal>
          <Select.Content>
            <Select.Viewport className="bg-white text-zinc-700 rounded shadow-lg px-4 py-2 ">
              <Select.Item value="">
                <Select.ItemText>Selecione...</Select.ItemText>
              </Select.Item>
              <Select.Item value="CHEVETTE">
                <Select.ItemText>Chevette</Select.ItemText>
              </Select.Item>
            </Select.Viewport>
          </Select.Content>
        </Select.Portal>
      </Select.Root>
    </div>
  )
}
