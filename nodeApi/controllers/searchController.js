const Ticket = require('../models/tickets');

const searchTickets = async (req, res) => {
  try {
    const { query } = req.params;
    const tickets = await Ticket.find({ $text: { $search: query } });
    res.status(200).json(tickets);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
}

const searchTicketsByStatus = async (req, res) => {
  try {
    const { status } = req.params;
    const tickets = await Ticket.find({ status });
    res.json(tickets);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
}

const searchTicketsByPriority = async (req, res) => {
  try {
    const { priority } = req.params;
    const tickets = await Ticket.find({
      priority: { $gte: priority }
    });
    res.json(tickets);
  }
  catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
}


module.exports = { searchTickets, searchTicketsByStatus, searchTicketsByPriority };
