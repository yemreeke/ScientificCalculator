import React, { useState } from "react";
import { View, Text, SafeAreaView } from "react-native";
import CustomButton from './CustomButton';

const HomeScreen = () => {
  const [firstNumber, setFirstNumber] = useState("");
  const [lastNumber, setLastNumber] = useState("");
  const [operator, setOperator] = useState("");
  const [result, setResult] = useState("");

  const CalculateFactoriel = (num) => {
    if (num < 0) {
      return -1;
    }
    else if (num == 0) {
      return 1;
    }
    else {
      return (num * CalculateFactoriel(num - 1));
    }
  }

  const CalculateScientific = (operation) => {
    if (firstNumber != "") {
      if (operation == "sin") {
        Clear();
        setResult(Math.sin(firstNumber).toFixed(10));
      }
      else if (operation == "cos") {
        Clear();
        setResult(Math.cos(firstNumber).toFixed(10));
      }
      else if (operation == "tan") {
        Clear();
        setResult(Math.tan(firstNumber).toFixed(10));
      }
      else if (operation == "cot") {
        Clear();
        setResult((1 / Math.tan(firstNumber)).toFixed(10));
      }
      else if (operation == "x!") {
        Clear();
        setResult(CalculateFactoriel(firstNumber));
      }
      else if (operation == "x²") {
        Clear();
        setResult((firstNumber) * (firstNumber));
      }
      else if (operation == "√") {
        Clear();
        setResult(Math.sqrt(firstNumber).toFixed(10));
      }
      else if (operation == "π") {
        Clear();
        setResult((Math.PI * firstNumber).toFixed(10));
      }

    }
  }

  const ClickOperator = (operator) => {
    if (lastNumber == "" && firstNumber != "") {
      setOperator(operator);
    }
  };

  const Clear = () => {
    setFirstNumber("");
    setLastNumber("");
    setOperator("");
    setResult("");
  };
  const ClickNumber = (num) => {
    setResult("")
    if (operator) {
      if (num == ".") {
        if (lastNumber.length == 0) {
          setLastNumber("0.")
        }
        else if (lastNumber.indexOf(".") == -1) {
          setLastNumber(lastNumber + num)
        }
      }
      else if (lastNumber.length < 6) {
        setLastNumber(lastNumber + num)
      }
    }
    else {
      if (num == ".") {
        if (firstNumber.length == 0) {
          setFirstNumber("0.")
        }
        else if (firstNumber.indexOf(".") == -1) {
          setFirstNumber(firstNumber + num)
        }
      }
      else if (firstNumber.length < 6) {
        setFirstNumber(firstNumber + num)
      }
    }
  }

  const Decrease = () => {
    if (operator == "") {
      setFirstNumber(firstNumber.slice(0, -1));
    }
    else {
      setLastNumber(lastNumber.slice(0, -1));
    }
  }
  const Calculate = () => {
    if (operator == "+") {
      Clear();
      setResult(parseFloat(firstNumber) + parseFloat(lastNumber));
    }
    else if (operator == "-") {
      Clear();
      setResult(parseFloat(firstNumber) - parseFloat(lastNumber));

    }
    else if (operator == "*") {
      Clear();
      setResult(parseFloat(firstNumber) * parseFloat(lastNumber));

    }
    else if (operator == "/") {
      Clear();
      setResult(parseFloat(firstNumber) / parseFloat(lastNumber));

    }
    else if (operator == "％") {
      Clear();
      setResult(parseFloat(firstNumber) / 100 * parseFloat(lastNumber));
    }
    else if (operator == "mod") {
      Clear();
      setResult(parseFloat(firstNumber) % parseFloat(lastNumber));
    }
    else {
      setResult("")
    }
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: "center",
      }}>
      <View
        style={{
          marginTop: 10,
          borderWidth: 3,
          height: 100,
          width: "90%",
          justifyContent: "center",
          alignSelf: "center",
        }
        }
      >
        {result == "" ?
          <Text style={{
            fontSize: 40,
            color: '#000',
            alignSelf: "flex-end"
          }
          }>
            {firstNumber}{operator}{lastNumber}
          </Text>
          :
          <Text style={{
            fontSize: 40,
            color: '#000',
            alignSelf: "flex-end"
          }}>
            {result}
          </Text>
        }
      </View >


      <View style={{ marginTop: 10, alignItems: "center", width: "100%" }}>
        <View style={{ flexDirection: "row", }}>
          <CustomButton text="x!" color="#1e4fff" onPress={() => { CalculateScientific("x!") }} />
          <CustomButton text="x²" color="#1e4fff" onPress={() => { CalculateScientific("x²") }} />
          <CustomButton text="√" color="#1e4fff" onPress={() => { CalculateScientific("√") }} />
          <CustomButton text="π" color="#1e4fff" onPress={() => { CalculateScientific("π") }} />
        </View>

        <View style={{ flexDirection: "row", }}>
          <CustomButton text="sin" color="#1e4fff" onPress={() => { CalculateScientific("sin") }} />
          <CustomButton text="cos" color="#1e4fff" onPress={() => { CalculateScientific("cos") }} />
          <CustomButton text="tan" color="#1e4fff" onPress={() => { CalculateScientific("tan") }} />
          <CustomButton text="cot" color="#1e4fff" onPress={() => { CalculateScientific("cot") }} />
        </View>

        <View style={{ flexDirection: "row", }}>
          <CustomButton text="C" color="#ff0000" onPress={() => Clear()} />
          <CustomButton text="mod" color="#ff701e" onPress={() => ClickOperator("mod")} />
          <CustomButton text="％" color="#ff701e" onPress={() => ClickOperator("％")} />
          <CustomButton text="÷" color="#ff701e" onPress={() => ClickOperator("/")} />
        </View>

        <View style={{ flexDirection: "row", }}>
          <CustomButton text="7" color="#09bff7" onPress={() => ClickNumber("7")} />
          <CustomButton text="8" color="#09bff7" onPress={() => ClickNumber("8")} />
          <CustomButton text="9" color="#09bff7" onPress={() => ClickNumber("9")} />
          <CustomButton text="×" color="#ff701e" onPress={() => ClickOperator("*")} />
        </View>

        <View style={{ flexDirection: "row", }}>
          <CustomButton text="4" color="#09bff7" onPress={() => ClickNumber("4")} />
          <CustomButton text="5" color="#09bff7" onPress={() => ClickNumber("5")} />
          <CustomButton text="6" color="#09bff7" onPress={() => ClickNumber("6")} />
          <CustomButton text="-" color="#ff701e" onPress={() => ClickOperator("-")} />
        </View>

        <View style={{ flexDirection: "row", }}>
          <CustomButton text="1" color="#09bff7" onPress={() => ClickNumber("1")} />
          <CustomButton text="2" color="#09bff7" onPress={() => ClickNumber("2")} />
          <CustomButton text="3" color="#09bff7" onPress={() => ClickNumber("3")} />
          <CustomButton text="+" color="#ff701e" onPress={() => ClickOperator("+")} />
        </View>

        <View style={{ flexDirection: "row", }}>
          <CustomButton text="." color="gray" onPress={() => ClickNumber(".")} />
          <CustomButton text="0" color="#09bff7" onPress={() => ClickNumber("0")} />
          <CustomButton text="⌫" color="red" onPress={() => Decrease()} />
          <CustomButton text="=" color="green" onPress={() => Calculate()} />
        </View>
      </View>
    </SafeAreaView >
  );
}
export default HomeScreen;
