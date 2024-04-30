const Ticket = require('../models/tickets');

export const searchTickets = async (req, res) => {
  try {
    const { query } = req.params;
    const tickets = await Ticket.find({ $text: { $search: query } });
    res.json(tickets);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
}

export const searchTicketsByStatus = async (req, res) => {
  try {
    const { status } = req.params;
    const tickets = await Ticket.find({ status });
    res.json(tickets);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
}

export const searchTicketsByPriority = async (req, res) => {
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

