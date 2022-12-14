// import styles from '../Input/Input.module.css';

// import React, { useState } from 'react';
// import PropTypes from 'prop-types';

// export default function Input () {
//   // state = {
//   //   name: '',
//   //   number: '',
//   // };

//   const [name, setName] = useState('');
//   const [number, setNumber] = useState('');

//  const handleChange = event => {
//   console.log(event.target.value)

//   let eventName = event.target.name
//   let eventValue = event.target.value
//   // setName({
//   //     [event.target.name]: event.target.value,
//   //   });

//  const handleSubmit = event => {
//     event.preventDefault();
//     // console.log(this.state)

//     // this.props.onSubmit(this.state);

// // блять????

//     checkTest();
//   };

// const  checkTest = () => {
//     let countTest = 0;
//     const tests = this.props.test;
//     // eslint-disable-next-line array-callback-return
//     tests.map(test => {
//       if (name === test.name) {
//         countTest += 1;
//       }
//     });
//     if (countTest === 0) {
//       reset();
//     }
//   };

//  const reset = () => {
//   setName('')
//   };

//     return (
//       <div>
//         <h2 className={styles.mainText}>Телефонная книга</h2>
//         <form className={styles.formWrapper} onSubmit={handleSubmit}>
//           <label>
//             <p className={styles.text}> Имя </p>
//             <input
//               className={styles.input}
//               name="name"
//               type="text"
//               value={name}
//               onChange={handleChange}
//               pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//               title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//               required
//             ></input>

//             <p className={styles.text}> Номер </p>
//             <input
//               className={styles.input}
//               name="number"
//               type="tel"
//               value={number}
//               onChange={handleChange}
//               pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//               title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//               required
//             ></input>
//           </label>

//           <div>
//             <button className={styles.button} type="submit">
//               Добавить контакт
//             </button>
//           </div>
//         </form>
//       </div>
//     );

// }

// Input.propTypes = {
//   onSubmit: PropTypes.func.isRequired,
// };

// if (eventName === 'name')
// console.log('Это имя')
//   };

//   if (eventName === 'number')
// console.log('Это фамилия')
//   };

import styles from '../Input/Input.module.css';

import React, { useState } from 'react';
import PropTypes from 'prop-types';

export default function Input({ onSubmit, test }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = event => {
    // console.log(event.target.value)

    let eventName = event.target.name;
    let eventValue = event.target.value;

    if (eventName === 'name') {
      setName(eventValue);
    }

    if (eventName === 'number') {
      setNumber(eventValue);
    }
  };

  const handleSubmit = event => {
    event.preventDefault();

    onSubmit({name: name, number: number});

  

     checkTest();
  };

  const  checkTest = () => {
    let countTest = 0;
    // eslint-disable-next-line array-callback-return
    test.map(test => {
      if (name === test.name) {
        countTest += 1;
      }
    });
    if (countTest === 0) {
       reset();
    }
  };

  const reset = () => {
    setName('');
     setNumber('');
  };

  return (
    <div>
      <h2 className={styles.mainText}>Телефонная книга</h2>
      <form className={styles.formWrapper} onSubmit={handleSubmit}>
        <label>
          <p className={styles.text}> Имя </p>
          <input
            className={styles.input}
            name="name"
            type="text"
            value={name}
            onChange={handleChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          ></input>

          <p className={styles.text}> Номер </p>
          <input
            className={styles.input}
            name="number"
            type="tel"
            value={number}
            onChange={handleChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          ></input>
        </label>

        <div>
          <button className={styles.button} type="submit">
            Добавить контакт
          </button>
        </div>
      </form>
    </div>
  );
}

Input.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};





















// import styles from '../Input/Input.module.css';

// import React, { Component } from 'react';
// import PropTypes from 'prop-types';

// export default class Input extends Component {
//   state = {
//     name: '',
//     number: '',
//   };

//   handleChange = event => {
//     this.setState({
//       [event.target.name]: event.target.value,
//     });
//   };

//   handleSubmit = event => {
//     event.preventDefault();
//     // console.log(this.state)

//     this.props.onSubmit(this.state);

//     this.checkTest();
//   };

//   checkTest = () => {
//     let countTest = 0;
//     const tests = this.props.test;
//     // eslint-disable-next-line array-callback-return
//     tests.map(test => {
//       if (this.state.name === test.name) {
//         countTest += 1;
//       }
//     });
//     if (countTest === 0) {
//       this.reset();
//     }
//   };

//   reset = () => {
//     this.setState({ name: '', number: '' });
//   };

//   render() {
//     return (
//       <div>
//         <h2 className={styles.mainText}>Телефонная книга</h2>
//         <form className={styles.formWrapper} onSubmit={this.handleSubmit}>
//           <label>
//             <p className={styles.text}> Имя </p>
//             <input
//               className={styles.input}
//               name="name"
//               type="text"
//               value={this.state.name}
//               onChange={this.handleChange}
//               pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//               title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//               required
//             ></input>

//             <p className={styles.text}> Номер </p>
//             <input
//               className={styles.input}
//               name="number"
//               type="tel"
//               value={this.state.number}
//               onChange={this.handleChange}
//               pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//               title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//               required
//             ></input>
//           </label>

//           <div>
//             <button className={styles.button} type="submit">
//               Добавить контакт
//             </button>
//           </div>
//         </form>
//       </div>
//     );
//   }
// }

// Input.propTypes = {
//   onSubmit: PropTypes.func.isRequired,
// };
