import React from 'react'
import './Example2.css'

// 강사님
function TableHeader() {

  return (
    <div className="th">
        <div className="td">사번</div>
        <div className="td">이름</div>
        <div className="td">출근상태</div>
    </div>
    );
}

interface TableRowProps {
  employeeNumber: string;
  employeeName: string;
  workState: boolean;
}

function TableRow({employeeName, employeeNumber, workState} : TableRowProps) {
  
  const color = workState ? "blue" : "red";

  return (
    <div className="tr">
      <div className="td">{employeeName}</div>
      <div className="td">{employeeNumber}</div>
      {/* 변수이름과 속성명이 같을 경우 하나의 이름만 작성해도 됨 */}
      <div className="td" style={{ color }}>●</div>
    </div>
  );
}

interface TableDataTrProps {
  type: 'tr';
  employeeNumber: string;
  employeeName: string;
  workState: boolean;
}

interface TableDataThProps {
  type: 'th';
}

// TableHeader + TableRow 하나로 합치기
function TableData(props: TableDataTrProps | TableDataThProps) {
  // 공통으로 있는것만 꺼내올 수 있음
  const { type } = props;
  if (type === "th") {
    return (
      <div className="th">
        <div className="td">사번</div>
        <div className="td">이름</div>
        <div className="td">출근상태</div>
      </div>
    );
  }

  const { employeeNumber, employeeName, workState } = props;
  const color = workState ? "blue" : "red";

  return (
    <div className="tr">
      <div className="td">{employeeName}</div>
      <div className="td">{employeeNumber}</div>
      {/* 변수이름과 속성명이 같을 경우 하나의 이름만 작성해도 됨 */}
      <div className="td" style={{ color }}>●</div>
    </div>
  );
}

export default function Example2() {

  return (
      <div className="table">
        {/* <TableHeader />
      <TableRow {... employee1}/>
      <TableRow {... employee2}/>
      <TableRow {...employee3} /> */}

        {/* <TableData type='th' />
      <TableData type='tr' {... employee1} />
      <TableData type='tr' {... employee2} />
      <TableData type='tr' {... employee3} /> */}

        {/* <TableHeader />
        <TableRow {...employees[0]} />
        <TableRow {...employees[1]} />
        <TableRow {...employees[2]} /> */}

      <TableHeader />
      {employees.map((employee, index) => <TableRow key={index} {... employee} /> )}
      </div>
  );
}

const employees = [
  {
    employeeNumber: "202401",
    employeeName: "홍길동",
    workState: false,
  },
  {
    employeeNumber: "202402",
    employeeName: "이영희",
    workState: true,
  },
  {
    employeeNumber: "202403",
    employeeName: "김철수",
    workState: true,
  }
];