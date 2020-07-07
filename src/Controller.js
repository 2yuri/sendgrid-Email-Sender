const express = require("express");

const Email = require("./Email");

module.exports = {
  async store(req, res) {
    try {
      const { name, email, phone, text } = req.body;
      Email.send(
        `${name} - ${email}`,
        `<h1>Nova mensagem recebida no site</h1>
            <p>Enviado por: <b>${name}</b>" - ${email}</p>
            <p>Telefone: ${phone}</p>
            <p>Mensagem: ${text}</p>`
      );

      console.log(res, req);
      res.status(200).send("Email enviado com sucesso!");
    } catch (err) {
      console.log(err);
      res.status(400).send("Ocorreu uma falha!");
    }
  },
};
