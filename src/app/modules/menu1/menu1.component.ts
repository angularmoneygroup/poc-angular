import { Component, OnInit } from '@angular/core';

interface ItemData {
  id: number;
  name: string;
  age: number;
  address: string;
}

@Component({
  selector: 'app-menu1',
  templateUrl: './menu1.component.html',
  styleUrls: ['./menu1.component.scss']
})
export class Menu1Component implements OnInit {
  listOfSelection = [
    {
      text: 'Select All Row',
      onSelect: () => {
        this.onAllChecked(true);
      }
    },
    {
      text: 'Select Odd Row',
      onSelect: () => {
        this.listOfCurrentPageData.forEach((data, index) => this.updateCheckedSet(data.id, index % 2 !== 0));
        this.refreshCheckedStatus();
      }
    },
    {
      text: 'Select Even Row',
      onSelect: () => {
        this.listOfCurrentPageData.forEach((data, index) => this.updateCheckedSet(data.id, index % 2 === 0));
        this.refreshCheckedStatus();
      }
    }
  ];
  checked = false;
  indeterminate = false;
  listOfCurrentPageData: readonly ItemData[] = [];
  listOfData: readonly any[] = [];
  setOfCheckedId = new Set<number>();

  updateCheckedSet(id: number, checked: boolean): void {
    if (checked) {
      this.setOfCheckedId.add(id);
    } else {
      this.setOfCheckedId.delete(id);
    }
  }

  onItemChecked(id: number, checked: boolean): void {
    this.updateCheckedSet(id, checked);
    this.refreshCheckedStatus();
  }

  onAllChecked(value: boolean): void {
    this.listOfCurrentPageData.forEach(item => this.updateCheckedSet(item.id, value));
    this.refreshCheckedStatus();
  }

  onCurrentPageDataChange($event: readonly ItemData[]): void {
    this.listOfCurrentPageData = $event;
    this.refreshCheckedStatus();
  }

  refreshCheckedStatus(): void {
    this.checked = this.listOfCurrentPageData.every(item => this.setOfCheckedId.has(item.id));
    this.indeterminate = this.listOfCurrentPageData.some(item => this.setOfCheckedId.has(item.id)) && !this.checked;
  }

  ngOnInit(): void {
    this.listOfData = [
      {
        id: 1,
        code: `00000000001`,
        name: 'Lorem ipsum dolor sit amet',
        aFixed: `Sim`,
        generatorAct: `Data o pagamento`,
        apuration: `Diário`,
        vencimento: `Variavel`,
      },
      {
        id: 2,
        code: `00000000002`,
        name: 'Lorem ipsum dolor sit amet',
        aFixed: `Não`,
        generatorAct: `Emissão de NF`,
        apuration: `Quinzenal`,
        vencimento: `fixo`,
      },
      {
        id: 1,
        code: `00000000001`,
        name: 'Lorem ipsum dolor sit amet',
        aFixed: `Sim`,
        generatorAct: `Data o pagamento`,
        apuration: `Diário`,
        vencimento: `Variavel`,
      },
      {
        id: 2,
        code: `00000000002`,
        name: 'Lorem ipsum dolor sit amet',
        aFixed: `Não`,
        generatorAct: `Emissão de NF`,
        apuration: `Quinzenal`,
        vencimento: `fixo`,
      },
      {
        id: 1,
        code: `00000000001`,
        name: 'Lorem ipsum dolor sit amet',
        aFixed: `Sim`,
        generatorAct: `Data o pagamento`,
        apuration: `Diário`,
        vencimento: `Variavel`,
      },
      {
        id: 2,
        code: `00000000002`,
        name: 'Lorem ipsum dolor sit amet',
        aFixed: `Não`,
        generatorAct: `Emissão de NF`,
        apuration: `Quinzenal`,
        vencimento: `fixo`,
      },
      {
        id: 1,
        code: `00000000001`,
        name: 'Lorem ipsum dolor sit amet',
        aFixed: `Sim`,
        generatorAct: `Data o pagamento`,
        apuration: `Diário`,
        vencimento: `Variavel`,
      },
      {
        id: 2,
        code: `00000000002`,
        name: 'Lorem ipsum dolor sit amet',
        aFixed: `Não`,
        generatorAct: `Emissão de NF`,
        apuration: `Quinzenal`,
        vencimento: `fixo`,
      },
      {
        id: 1,
        code: `00000000001`,
        name: 'Lorem ipsum dolor sit amet',
        aFixed: `Sim`,
        generatorAct: `Data o pagamento`,
        apuration: `Diário`,
        vencimento: `Variavel`,
      },
      {
        id: 2,
        code: `00000000002`,
        name: 'Lorem ipsum dolor sit amet',
        aFixed: `Não`,
        generatorAct: `Emissão de NF`,
        apuration: `Quinzenal`,
        vencimento: `fixo`,
      },
      {
        id: 1,
        code: `00000000001`,
        name: 'Lorem ipsum dolor sit amet',
        aFixed: `Sim`,
        generatorAct: `Data o pagamento`,
        apuration: `Diário`,
        vencimento: `Variavel`,
      },
      {
        id: 2,
        code: `00000000002`,
        name: 'Lorem ipsum dolor sit amet',
        aFixed: `Não`,
        generatorAct: `Emissão de NF`,
        apuration: `Quinzenal`,
        vencimento: `fixo`,
      },
      {
        id: 1,
        code: `00000000001`,
        name: 'Lorem ipsum dolor sit amet',
        aFixed: `Sim`,
        generatorAct: `Data o pagamento`,
        apuration: `Diário`,
        vencimento: `Variavel`,
      },
      {
        id: 2,
        code: `00000000002`,
        name: 'Lorem ipsum dolor sit amet',
        aFixed: `Não`,
        generatorAct: `Emissão de NF`,
        apuration: `Quinzenal`,
        vencimento: `fixo`,
      },
      {
        id: 1,
        code: `00000000001`,
        name: 'Lorem ipsum dolor sit amet',
        aFixed: `Sim`,
        generatorAct: `Data o pagamento`,
        apuration: `Diário`,
        vencimento: `Variavel`,
      },
      {
        id: 2,
        code: `00000000002`,
        name: 'Lorem ipsum dolor sit amet',
        aFixed: `Não`,
        generatorAct: `Emissão de NF`,
        apuration: `Quinzenal`,
        vencimento: `fixo`,
      },
      {
        id: 1,
        code: `00000000001`,
        name: 'Lorem ipsum dolor sit amet',
        aFixed: `Sim`,
        generatorAct: `Data o pagamento`,
        apuration: `Diário`,
        vencimento: `Variavel`,
      },
      {
        id: 2,
        code: `00000000002`,
        name: 'Lorem ipsum dolor sit amet',
        aFixed: `Não`,
        generatorAct: `Emissão de NF`,
        apuration: `Quinzenal`,
        vencimento: `fixo`,
      },
      {
        id: 1,
        code: `00000000001`,
        name: 'Lorem ipsum dolor sit amet',
        aFixed: `Sim`,
        generatorAct: `Data o pagamento`,
        apuration: `Diário`,
        vencimento: `Variavel`,
      },
      {
        id: 2,
        code: `00000000002`,
        name: 'Lorem ipsum dolor sit amet',
        aFixed: `Não`,
        generatorAct: `Emissão de NF`,
        apuration: `Quinzenal`,
        vencimento: `fixo`,
      },
    ]
  }

}
